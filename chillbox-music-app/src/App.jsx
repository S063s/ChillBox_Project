import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import router from './router/router.jsx'
import ChillboxLayout from './components/ChillboxLayout.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
import { Route , Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import SignUpPage from './Pages/SignUpPage.jsx'
import SearchPage from './Pages/SearchPage.jsx'


function App() {
  return (
    <PlayerProvider>
      <ChillboxLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </ChillboxLayout>
    </PlayerProvider>
  );
}

export default App;