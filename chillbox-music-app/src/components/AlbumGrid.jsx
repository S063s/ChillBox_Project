import React from "react";
import TrackCard from "./TrackCard"; 

export default function AlbumGrid({ tracks = [], onPlayTrack }) {
    const validTracks = tracks.filter(track => track && track.id); 

    return (
        <div className="grid grid-cols-1 gap-6 w-11/12 mx-auto mt-6 
                sm:grid-cols-2    
                md:grid-cols-3
                lg:grid-cols-4">"
            {validTracks.map((track) => (
                <TrackCard
                    key={track.id}
                    track={track} 
                    onPlayTrack={onPlayTrack}
                />
            ))}
        </div>
    );
}