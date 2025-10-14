import React from "react";

function TrackCard({ track , onPlayTrack }) {
    const handlePlay = () => {
        if (onPlayTrack) {
            onPlayTrack(track.id);
        }
    }
const artistName = track.artist ? track.artist.name : "Unknown Artist";
const albumName = track.album ? track.album.name : "Unknown Album";

    return (
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
            <img src={track.album?.cover_medium} alt={track.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold">{track.title}</h3>
            <p className="text-gray-600">{artistName}</p>
            <p className="text-gray-600">{albumName}</p>
            <button onClick={handlePlay} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">
                Play
            </button>
        </div>
    );
}

export default TrackCard;
