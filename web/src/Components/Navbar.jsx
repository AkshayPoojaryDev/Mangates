import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="src\assets\logo.png" // Replace with actual path
                alt="Mangates Logo"
                className="h-12 w-auto" // slightly bigger size
              />
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
            <div className="relative">
              <button className="flex items-center gap-1 hover:text-blue-600">
                Courses
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <Link to="/tutors" className="hover:text-blue-600">Find a tutor</Link>
            <FaSearch className="text-gray-600 cursor-pointer" />
          </div>

          {/* Right: Cart and Auth */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <FaShoppingCart className="text-gray-700 text-xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </div>
            <Link to="/login" className="text-gray-800 font-medium hover:text-blue-600">Login</Link>
            <Link to="/join">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm">
                Join Now
              </button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
