import { createContext , useContext , useState , useRef , useEffect } from "react";
import axios from "axios";

const PlayerContext = createContext();
const API_URL = "https://api.deezer.com/track/";

export function PlayerProvider({ children }) {
    const audioRef = useRef(new Audio());
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

   const loadAndPlayTrack = async (trackId) => {
       try {
           const response = await axios.get(`${API_URL}${trackId}`);
           const track = response.data;
           setCurrentTrack({
                id: track.id,
                title: track.title,
                artist: track.artist.name,
                album: track.album.title,
                duration: track.duration,
                preview: track.preview,
           });
           audioRef.current.src = track.preview;
           audioRef.current.play();
           setIsPlaying(true);
       } catch (error) {
           console.error("Error fetching track:", error);
       }
   };

   return (
       <PlayerContext.Provider
           value={{
               currentTrack,
               isPlaying,
               loadAndPlayTrack,
               audioRef,
               setIsPlaying,
               currentTime,
               setCurrentTime,
               duration,
               setDuration,
               volume,
               setVolume,
               isMuted,
               setIsMuted,
           }}
       >
           {children}
       </PlayerContext.Provider>
   );
}

export function usePlayerContext() {
    return useContext(PlayerContext);
}

export default PlayerContext;
