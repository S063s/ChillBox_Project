import React from "react";
import { usePlayer } from "../context/PlayerContext";

function MusicControlBar({}) {
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

    const audioSrc = currentTrack ? currentTrack.preview : null;
    const Tracktitle = currentTrack ? currentTrack.title : "No track selected";
    const Trackartist = currentTrack ? currentTrack.artist : "Unknown Artist";
    const Trackalbum = currentTrack ? currentTrack.album : "Unknown Album";

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex items-center">
            <div className="flex items-center">
                <img src={audioSrc} alt={`${Tracktitle} cover`} className="w-12 h-12 mr-4" />
                <div className="flex flex-col">
                    <span className="font-bold">{Tracktitle}</span>
                    <span className="text-sm">{Trackartist}</span>
                    <span className="text-sm">{Trackalbum}</span>
                </div>
            </div>
        </div>
    );
}

export default MusicControlBar;
