import WelcomeBanner from '../components/WelcomeBanner.jsx'
import SectionTabs from '../components/SectionTabs.jsx'
import TrackCard from '../components/TrackCard.jsx'
import MusicControlBar from '../components/MusicControlBar'
import NowPlayingDetails from '../components/NowPlayingDetails.jsx'


function HomePage() {
  return (
    <div className="p-4">
      <WelcomeBanner />
      <SectionTabs />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </div>
      <MusicControlBar />
      <NowPlayingDetails />
    </div>
  );
}

export default HomePage;