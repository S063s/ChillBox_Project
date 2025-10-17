import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="bg-gray-800 p-2 text-center text-gray-400 text-xs shadow-inner">
            © 2025 ChillBox. All rights reserved.
            <nav className="mt-2">
                <Link to="/" className="text-gray-400 hover:text-white mx-2">
                    CHILLBOX
                </Link>
                <Link to="/search" className="text-gray-400 hover:text-white mx-2">
                    SEARCH
                </Link>
                <Link to="/signup" className="text-gray-400 hover:text-white mx-2">
                    SIGN UP
                </Link>
            </nav>
        </div>
    );
}

export default Footer;