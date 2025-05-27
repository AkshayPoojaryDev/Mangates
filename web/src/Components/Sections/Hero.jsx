import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/courses");
  };

  return (
    <section
      className="bg-gradient-to-r from-blue-50 to-white py-20"
      aria-label="Hero Section"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-blue-900">
            Learn the Skills of Tomorrow, Today
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Online Bootcamps · University Programs · Certification Courses
          </p>
          <button
            onClick={handleExploreClick}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
            aria-label="Explore Programs"
          >
            Explore Programs
          </button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src="/imgs/homePage.png"
            alt="Online learning illustration"
            className="w-full rounded-xl shadow-lg object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
