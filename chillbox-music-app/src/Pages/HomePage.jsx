import WelcomeBanner from '../components/WelcomeBanner.jsx'
import SectionTabs from '../components/SectionTabs.jsx'
import TrackCard from '../components/TrackCard.jsx'
import MusicControlBar from '../components/MusicControlBar'
import NowPlayingDetails from '../components/NowPlayingDetails.jsx'
import AlbumGrid from '../components/AlbumGrid.jsx'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import LibraryPage from './LibraryPage.jsx'


function HomePage() {
  return (
    <div className="p-4">
      <NavBar />
      <WelcomeBanner />
      <SectionTabs />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 background-color[#A307CA] mt-6">
        <TrackCard />
        <TrackCard />
        <TrackCard />
      </div>
      <MusicControlBar />
      <NowPlayingDetails />
      <LibraryPage />
      <AlbumGrid />
      <Footer />
    </div>
  );
}

export default HomePage;