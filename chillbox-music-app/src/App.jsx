import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import router from './router/router.jsx'
import Layout from './components/ChillboxLayout.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
import { Route , Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import SearchPage from './Pages/SearchPage.jsx'
import MusicPlayerPage from './Pages/MusicPlayerPage.jsx'


function App() {
  return (
    <PlayerProvider>
      <Layout>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/player" element={<MusicPlayerPage />} />
        </Routes>
      </Layout>
    </PlayerProvider>
  );
}

export default App;