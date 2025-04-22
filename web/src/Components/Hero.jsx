import React from "react";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-blue-900">
            Learn the skills of tomorrow, today
          </h1>
          <p className="text-gray-600 mb-6">
            Online Bootcamps | University Programs | Certification Courses
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded text-sm hover:bg-blue-700">
            Explore Programs
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:w-1/2 mt-8 md:mt-0"
        >
      <img 
      src="/imgs/homePage.png" 
      alt="Learning Banner" 
      className="w-full rounded-xl shadow-lg" 
/>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;