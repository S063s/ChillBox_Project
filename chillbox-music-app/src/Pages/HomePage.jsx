import React from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = {
   search: { path: "/", label: "Search" },
   library: { path: "/library", label: "Library" }
};


function HomePage() {
    const location = useLocation();
    const userName = "User"; 

    return (
        <div className="home-page">
            <header className="header">
                <h1>Welcome Back, {userName}!</h1>
                <nav className="nav">
                    <ul>
                        {Object.entries(navItems).map(([key, { path, label }]) => (
                            <li key={key} className={location.pathname === path ? "active" : ""}>
                                <Link to={path}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default HomePage;