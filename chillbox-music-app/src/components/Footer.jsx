import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ChillBox. All rights reserved.
        </p>
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
    </footer>
  );
}

export default Footer;