import React from "react";
import { usePlayer } from "../context/PlayerContext"; 

function MusicControlBar() {
    const { 
        currentTrack, isPlaying, togglePlayPause, 
        currentTime, duration, handleSeek, volume, handleVolumeChange
    } = usePlayer();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    const trackTitle = currentTrack?.title || "No track selected";
    const trackArtist = currentTrack?.artist || "Unknown Artist";

    return (
        <div className="bg-gray-800 p-3 flex justify-between items-center w-full shadow-2xl">
            <div className="flex flex-col w-1/4 truncate">
                <p className="text-white text-sm font-semibold truncate">{trackTitle}</p>
                <p className="text-gray-400 text-xs truncate">{trackArtist}</p>
            </div>
            <div className="flex flex-col items-center w-2/4 px-4">
                
                <button 
                    className="text-white text-xl mb-1 disabled:opacity-50" 
                    onClick={togglePlayPause} 
                    disabled={!currentTrack}
                >
                    {isPlaying ? '⏸' : '▶'}
                </button>

                <div className="flex items-center space-x-2 w-full">
                    <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={(e) => handleSeek(e.target.value)}
                        className="flex-grow h-1 appearance-none bg-gray-700 rounded-full accent-fuchsia-500 cursor-pointer"
                    />
                    <span className="text-xs text-gray-400">{formatTime(duration)}</span>
                </div>
            </div>

            <div className="flex items-center justify-end w-1/4 space-x-2">
                <div className="hidden md:flex items-center w-1/4 justify-end">
                <i className="fas fa-volume-up text-lg mr-2"></i>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
            </div>
        </div>
        </div>
    );
}

export default MusicControlBar;