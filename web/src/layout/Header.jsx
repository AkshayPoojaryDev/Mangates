import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon library

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand */}
          <Link to="/" className="text-3xl font-extrabold text-blue-600 tracking-tight hover:text-blue-700 transition">
            Mangates
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link to="/courses" className="hover:text-blue-600 transition">Courses</Link>
            <Link to="/bootcamps" className="hover:text-blue-600 transition">Bootcamps</Link>
            <Link to="/universities" className="hover:text-blue-600 transition">Universities</Link>
            <Link to="/resources" className="hover:text-blue-600 transition">Resources</Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-blue-600 border border-blue-600 px-4 py-1.5 rounded-md hover:bg-blue-50 transition">
              Log In
            </button>
            <button className="text-sm font-medium bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 border-t pt-4">
            <Link to="/courses" className="block text-gray-700 hover:text-blue-600 px-2 py-1">Courses</Link>
            <Link to="/bootcamps" className="block text-gray-700 hover:text-blue-600 px-2 py-1">Bootcamps</Link>
            <Link to="/universities" className="block text-gray-700 hover:text-blue-600 px-2 py-1">Universities</Link>
            <Link to="/resources" className="block text-gray-700 hover:text-blue-600 px-2 py-1">Resources</Link>
            <div className="flex flex-col gap-2 mt-3">
              <button className="w-full text-sm font-medium text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition">
                Log In
              </button>
              <button className="w-full text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
