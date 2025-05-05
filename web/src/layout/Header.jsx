

import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">Mangates</div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-600">Courses</a>
          <a href="#" className="hover:text-blue-600">Bootcamps</a>
          <a href="#" className="hover:text-blue-600">Universities</a>
          <a href="#" className="hover:text-blue-600">Resources</a>
        </nav>
        <div className="hidden md:flex gap-3">
          <button className="text-sm px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Log In</button>
          <button className="text-sm px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">Join Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

