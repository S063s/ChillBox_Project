import { usePlayer } from '../context/PlayerContext';

function NowPlayingDetails() {
    const { currentTrack , isPlaying , togglePlayPause } = usePlayer();

    if (!currentTrack) {
        return <div className="p-4">No track is playing</div>;
    }

    return (
        <div className="p-4 flex items-center">
            <img src={currentTrack.album.cover_medium} alt={currentTrack.title} className="w-16 h-16 mr-4" />
            <div>
                <h2 className="text-lg font-bold">{currentTrack.title}</h2>
                <p className="text-sm text-gray-600">{currentTrack.artist.name}</p>
            </div>
            <button onClick={togglePlayPause} className="ml-auto">
                {isplaying ? "Pause" : "Play"}
            </button>
        </div>
    );
}

export default NowPlayingDetails;
