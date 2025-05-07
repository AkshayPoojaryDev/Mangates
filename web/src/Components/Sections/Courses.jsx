import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import courses from "../../data/courses";
import Header from "../../layout/Header"; // Assuming you have a Header component

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === "All" || course.category === category;
    return matchSearch && matchCategory;
  });

  const categories = ["All", ...new Set(courses.map((c) => c.category))];

  return (
    <>
       {/* Added Header component */}
      <main className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-10 tracking-tight">
            Find the Perfect Program for You
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <input
              type="text"
              placeholder="Search by course name..."
              className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search courses"
            />
            <select
              className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
            >
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <Link to={`/course/${course.id}`} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <img
                      src={course.image}
                      alt={`Cover image for ${course.title}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-1 rounded">
                          {course.tag}
                        </span>
                        <span className="text-sm text-yellow-500 font-medium">
                          ★ {course.rating}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-blue-900">{course.title}</h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {course.description}
                      </p>
                      <p className="text-sm mt-3 text-blue-600 font-medium">
                        Duration: {course.duration}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center mt-10">
                <p className="text-gray-500 text-lg">No courses found for your search.</p>
                <p className="text-sm text-gray-400">Try different keywords or reset filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Courses;
    