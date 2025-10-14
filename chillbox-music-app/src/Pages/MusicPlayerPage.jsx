import usePlayer from '../context/PlayerContext.jsx';
import NowPlayingDetails from '../components/NowPlayingDetails.jsx';

function MusicPlayerPage() {
  const { currentTrack, isPlaying, play, pause } = usePlayer();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Music Player</h1>
      {currentTrack ? (
        <TrackCard track={currentTrack} isPlaying={isPlaying} play={play} pause={pause} />
      ) : (
        <p>No track is playing</p>
      )}
    </div>
  );
}

export default MusicPlayerPage;
