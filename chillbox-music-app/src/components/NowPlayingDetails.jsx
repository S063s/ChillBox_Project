import React from "react";
import { usePlayer } from "../context/PlayerContext";

function formatTime(sec = 0) {
  if (!sec || isNaN(sec)) {
    return "0:00";
  }
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function NowPlayingDetails() {
  const { currentTrack, progress, duration } = usePlayer();

  if (!currentTrack) {
    return (
      <div className="w-full text-left text-gray-200 mb-4">
        <div className="text-lg font-semibold">No track selected</div>
        <div className="text-sm text-gray-400">Unknown Artist</div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 items-center text-white mb-4">
      <img
        src={currentTrack.album?.cover_medium || currentTrack.cover || "https://preludepress.com/wp-content/uploads/2020/09/Tems-Damages.webp"}
        alt={currentTrack.title}
        className="w-28 h-28 rounded-lg object-cover"
      />
      <div>
        <div className="text-xl font-bold">{currentTrack.title}</div>
        <div className="text-sm text-gray-200">{currentTrack.artist?.name || "Unknown Artist"}</div>
        <div className="text-xs text-gray-400 mt-2">
          {formatTime(progress)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
}
