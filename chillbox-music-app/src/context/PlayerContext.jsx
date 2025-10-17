import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

const PlayerContext = createContext();
export const usePlayer = () => useContext(PlayerContext);

export function PlayerProvider({ children }) {
    const audioRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [queue, setQueue] = useState([]);
    const [volume, setVolume] = useState(1.0);

    useEffect(() => {
        const fetchCatalog = async () => {
            try {
                const response = await axios.get("fetch('/api/deezer/genre')");
            } catch (error) {
                console.error("Error fetching catalog:", error);
            }
        };
        fetchCatalog();
    }, []);

    useEffect(() => {
        const audio = audioRef.current;

        const onTimeUpdate = () => setProgress(audio.currentTime);
        const onLoadedMeta = () => setDuration(audio.duration || 0);
        const onEnded = () => {
            setIsPlaying(false);
            const index = queue.findIndex(track => track.id === currentTrack?.id);
            if (index >= 0 && index < queue.length - 1) {
                playTrack(queue[index + 1]);
            }
        };

        audio.addEventListener("timeupdate", onTimeUpdate);
        audio.addEventListener("loadedmetadata", onLoadedMeta);
        audio.addEventListener("ended", onEnded);

        return () => {
            audio.removeEventListener("timeupdate", onTimeUpdate);
            audio.removeEventListener("loadedmetadata", onLoadedMeta);
            audio.removeEventListener("ended", onEnded);
        };
    }, [queue, currentTrack]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    function handleVolumeChange(e) {
        const newVolume = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    function playTrack(track, tracksList = []) {
        if (!track) return;
        const audio = audioRef.current;
        if (tracksList.length) setQueue(tracksList);
        if (currentTrack?.id === track.id && audio.src) {
            togglePlay();
            return;
        }
        setCurrentTrack(track);
        audio.src = track.preview || track.audioUrl || "";
        audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    function togglePlay() {
        const audio = audioRef.current;
        if (!audio.src) return;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
    }

    function seekTo(seconds) {
        const audio = audioRef.current;
        if (!audio.src) return;
        audio.currentTime = seconds;
        setProgress(seconds);
    }

    function playNext() {
        const index = queue.findIndex(t => t.id === currentTrack?.id);
        if (index >= 0 && index < queue.length - 1) {
            playTrack(queue[index + 1], queue);
        }
    }

    function playPrev() {
        const index = queue.findIndex(t => t.id === currentTrack?.id);
        if (index > 0) {
            playTrack(queue[index - 1], queue);
        } else {
            seekTo(0);
        }
    }


    return (
        <PlayerContext.Provider
            value={{
                currentTrack,
                isPlaying,
                progress,
                duration,
                playTrack,
                togglePlay,
                seekTo,
                playNext,
                playPrev,
                setQueue,
                volume,
                setVolume,
                handleVolumeChange,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}
