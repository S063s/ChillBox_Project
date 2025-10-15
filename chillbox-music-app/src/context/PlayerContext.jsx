import { createContext , useContext , useState , useRef , useEffect } from "react";


const PlayerContext = createContext();

export function usePlayer() {
    return useContext(PlayerContext);
}

export function PlayerProvider({ children }) {
    const audioRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackList, setTrackList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const playTrack = (track) => {
        if (currentTrack?.id !== track.id) {
            setCurrentTrack(track);
            audioRef.current.src = track.preview;
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack(currentTrack);
        }
    };

    const handleSeek = (time) => {
        audioRef.current.currentTime = time;
    };
    const handleVolumeChange = (volume) => {
        audioRef.current.volume = volume;
    };


    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener("ended", handleNext);
        return () => {
            audio.removeEventListener("ended", handleNext);
        };
    }, []);

    const setAudiodata = (track) => {
        audioRef.current.src = track.preview;
        audioRef.current.load();
    }

    const updateTime = () => {
        return audioRef.current.currentTime;
    };

    const updateDuration = () => {
        return audioRef.current.duration;
    }

    const getAudioElement = () => {
        return audioRef.current;
    }
    const loadAndPlayTrack = async (trackId) => {
        try {
            const response = await fetch(`https://api.deezer.com/track/${trackId}`);
            const trackData = await response.json();
            setCurrentTrack(trackData);
            setAudiodata(trackData);
            audioRef.current.play();
            setIsPlaying(true);
        }
        catch (error) {
            console.error("Error loading track:", error);
        }
    };

    const playNext = () => {
        if (currentIndex < trackList.length - 1) {
            const nextIndex = currentIndex + 1;
            const nextTrack = trackList[nextIndex];
            setCurrentIndex(nextIndex);
            loadAndPlayTrack(nextTrack.id);
        }
    };

    const playPrevious = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            const prevTrack = trackList[prevIndex];
            setCurrentIndex(prevIndex);
            loadAndPlayTrack(prevTrack.id);
        }
    };

    const handleNext = () => {
        playNext();
    };

    const pauseTrack = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const ContextValue = {
        currentTrack,
        isPlaying,
        playTrack,
        pauseTrack,
        togglePlayPause,
        handleSeek,
        handleVolumeChange,
        updateTime,
        updateDuration,
        getAudioElement,
        loadAndPlayTrack,
        playNext,
        playPrevious
    };

    return (
        <PlayerContext.Provider value={ContextValue}>
            {children}
        </PlayerContext.Provider>
    );
}
