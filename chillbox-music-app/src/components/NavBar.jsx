import React from 'react';
import { Link } from 'react-router-dom'; 

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Search', path: '/search' },
  { name: 'SignIn', path: '/signup' },
  { name: 'Library', path: '/library' },

];

function Navbar({ userName = "Shawn" }) {
    return (
        <nav className="flex items-center justify-between p-1 pr-2 rounded-full bg-purple-800 shadow-xl max-w-2xl mx-auto my-4">
            <Link to="/" className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-black text-xl font-bold mr-2">
            </Link>
            <div className="flex space-x-4 text-white text-sm font-semibold">
                {navItems.map((item) => (
                    <Link 
                        key={item.name} 
                        to={item.path} 
                        className="px-3 py-2 rounded-full transition duration-200 hover:bg-gray-700"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
            <div className="ml-auto px-4 py-2 bg-white text-black text-sm font-medium rounded-full">
                {userName}
            </div>
        </nav>
    );
}

export default Navbar;