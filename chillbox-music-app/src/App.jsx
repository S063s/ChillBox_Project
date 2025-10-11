import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import SignUpPage from './components/SignUpPage.jsx';
import { Switch } from 'react-router-dom';
import authProvider from './components/AuthProvider.jsx';

function App() {
  return(
    <Router>
      <h1 className='text-3xl text-red-500 flex-start bg-gray-100'>Home</h1>
      <Switch>
        <Router path="/signup" component={SignUpPage} />
      </Switch>
    </Router>
  )
}

export default App;