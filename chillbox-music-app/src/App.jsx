import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import router from './router/router.jsx'
import Layout from './components/Layout.jsx'
import { PlayerProvider } from './context/PlayerContext.jsx'
import { Route , Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'


function App() {
  return (
    <PlayerProvider>
      <Layout>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </PlayerProvider>
  );
}

export default App;