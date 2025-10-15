import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation(); 

  const linkClass = (path) =>
    `px-3 py-2 rounded ${
      location.pathname === path
        ? "bg-purple-600 text-white"
        : "text-gray-700 hover:text-white-600"
    }`;

  return (
    <nav className="w-full bg-none shadow-none px-2 flex left gap-6">
      <Link to="/" className={linkClass("/")}>
        Home
      </Link>
      <Link to="/search" className={linkClass("/search")}>
        Search
      </Link>
      <Link to="/signup" className={linkClass("/signup")}>
        Sign Up
      </Link>
    </nav>
  );
}
