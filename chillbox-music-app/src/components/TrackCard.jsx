import React from "react";

function TrackCard({ track = {}, onPlayTrack }) {
  const handlePlay = () => {
    if (onPlayTrack && track.id) {
      onPlayTrack(track.id);
    }
  };

  const artistName = track.artist ? track.artist.name : "Tems";
  const albumName = track.album ? track.album.name : "If Orange Was A Place";

  

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
      <img
        src={track.album?.cover_medium || "https://cdn-images.dzcdn.net/images/cover/db915776da31337fcd23c8ac1699ea22/1900x1900-000000-80-0-0.jpg"}
        alt={track.title}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{track.title}</h3>
      <p className="text-gray-600">{artistName}</p>
      <p className="text-gray-600">{albumName}</p>
      <button
        onClick={handlePlay}
        className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
      >
        Play
      </button>
    </div>
  );
}

export default TrackCard;
