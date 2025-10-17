import React from "react";
import { Link } from "react-router-dom"; 

function LibraryPage() {
    return (
        <div className="p-4 min-h-screen"> 
            <h1 className="text-2xl font-bold mb-4 text-white">Your Library</h1>
            
            <p className="text-gray-400 mb-6">
                This is where your saved tracks, albums, and playlists will appear.
            </p>
            <button 
                onClick={() => alert("Ready to add a track!")}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-200 mr-4"
            >
             Add to Library
            </button>
            <Link to="/library" className="text-white hover:text-purple-400 font-medium underline">
                Go to Library
            </Link>
        </div>
    );
}

export default LibraryPage;