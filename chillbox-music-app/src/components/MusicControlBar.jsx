import React from "react";
import { usePlayer } from "../context/PlayerContext";

const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

};

function MusicControlBar() {
    const {
        currentTrack,
        isPlaying,
        playTrack,
        pauseTrack,
        seekTrack,
        setVolume,
        volume,
        duration,
        currentTime
    } = usePlayer();

    const Tracktitle = currentTrack ? currentTrack.title : "No track selected";
    const Trackartist = currentTrack ? currentTrack.artist : "Unknown Artist";

    const coverArtSrc = currentTrack ? currentTrack.preview : 'no-cover-art.png';

    const handleSeek = (event) => {
        seekTrack(parseFloat(event.target.value));
    };

    const handlePlayPause = () => {
        if (currentTrack) {
            isPlaying ? pauseTrack() : playTrack();
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="flex items-center w-1/4 min-w-[200px] mb-2 md:mb-0">
                <img 
                    src={coverArtSrc} 
                    alt={`${Tracktitle} cover`} 
                    className="w-12 h-12 mr-4 object-cover rounded" 
                />
                <div className="flex flex-col overflow-hidden whitespace-nowrap">
                    <span className="font-bold text-sm truncate">{Tracktitle}</span>
                    <span className="text-xs text-gray-400 truncate">{Trackartist}</span>
                </div>
            </div>
            <div className="flex flex-col items-center w-full md:w-1/2 max-w-xl">
                <div className="flex justify-center mb-2">
                    <button 
                        onClick={handlePlayPause}
                        className="text-white text-3xl hover:text-green-500 transition-colors disabled:opacity-50"
                        disabled={!currentTrack}
                        aria-label={isPlaying ? "Pause" : "Play"}
                    >
                        {isPlaying ? (
                            <i className="fas fa-pause-circle"></i>
                        ) : (
                            <i className="fas fa-play-circle"></i>
                        )}
                    </button>
                </div>
                <div className="flex items-center w-full space-x-2 text-xs">
                    <span>{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration || 0} 
                        step="0.1"
                        value={currentTime}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        disabled={!currentTrack || !duration}
                    />
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
            <div className="hidden md:flex items-center w-1/4 justify-end">
                <i className="fas fa-volume-up text-lg mr-2"></i>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
            </div>
        </div>
    );
}

export default MusicControlBar;