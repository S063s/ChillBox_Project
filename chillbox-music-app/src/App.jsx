import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ createBrowserRouter , RouterProvider } from 'react-router';
import SignUpPage from './Pages/SignUpPage.jsx';
import SearchPage from './Pages/SearchPage.jsx';

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  }
]);

function App() {
  return(
    <RouterProvider router={router} />
  );
}

export default App;