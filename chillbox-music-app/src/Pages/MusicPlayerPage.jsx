import { usePlayer } from '../context/PlayerContext';
import NowPlayingDetails from '../components/NowPlayingDetails.jsx';
import TrackCard from '../components/TrackCard.jsx';


function MusicPlayerPage() {
  const { currentTrack, isPlaying, playTrack, pauseTrack } = usePlayer();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Music Player</h1>
      {currentTrack ? (
        <TrackCard track={currentTrack} isPlaying={isPlaying} play={playTrack} pause={pauseTrack} />
      ) : (
        <p>No track is playing</p>
      )}
    </div>
  );
}

export default MusicPlayerPage;
