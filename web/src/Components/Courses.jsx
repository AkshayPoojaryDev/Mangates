import React, { useState } from "react";
import { motion } from "framer-motion";
import datamaster from "../assets/DataMaster.png";
import cloudImg from '../assets/cloud.png';
import ai from '../assets/Ai&ML.png';
const allCourses = [
  {
    title: "Data Science Master Program",
    category: "Data Science",
    description: "Comprehensive training in data analysis and ML tools.",
    image: datamaster,
    rating: 4.6,
    duration: "12 Months",
    tag: "Best Seller",
  },
  {
    title: "Cloud Computing Certification",
    category: "Cloud",
    description: "Learn AWS, Azure, and GCP with hands-on labs.",
    image: cloudImg,
    rating: 4.5,
    duration: "6 Months",
    tag: "University Program",
  },
  {
    title: "AI & ML Course",
    category: "AI & ML",
    description: "Build models using TensorFlow, Keras, and more.",
    image: ai,
    rating: 4.7,
    duration: "8 Months",
    tag: "Trending",
  },
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = allCourses.filter(course => {
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === "All" || course.category === category;
    return matchSearch && matchCategory;
  });

  const categories = ["All", ...new Set(allCourses.map(c => c.category))];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Find Your Program</h2>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Search by course name..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 px-4 py-2 border rounded-md shadow-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Courses */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
          {filteredCourses.length > 0 ? filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded">{course.tag}</span>
                  <span className="text-sm text-yellow-500 font-medium">★ {course.rating}</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">{course.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{course.description}</p>
                <p className="text-sm mt-3 text-blue-600 font-medium">Duration: {course.duration}</p>
              </div>
            </motion.div>
          )) : (
            <p className="text-center text-gray-500 col-span-full">No courses match your criteria.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
