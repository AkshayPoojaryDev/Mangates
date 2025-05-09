import React, { useState } from "react";
import { Link } from "react-router-dom";
import { programs } from "../../data/programs";

const categories = [
  "Most Popular",
  "Generative AI",
  "AI & Machine Learning",
  "Data Science & Business Analytics",
  "Project Management",
  "Cyber Security",
  "Agile and Scrum",
  "Cloud Computing & DevOps",
  "Business and Leadership",
  "Software Development",
  "Product and Design",
  "IT Service and Architecture"
];

const TopPrograms = () => {
  const [selectedCategory, setSelectedCategory] = useState("Most Popular");

  const filteredPrograms = selectedCategory === "Most Popular"
    ? programs
    : programs.filter(p => p.category === selectedCategory);

  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center md:text-left">
          Explore Our Top Programs
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          <aside className="md:w-1/4">
            <div className="flex md:flex-col flex-wrap gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm px-4 py-2 rounded-md text-left w-full border ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-900 hover:bg-blue-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {filteredPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <div className="relative">
                  <img src={program.image} alt={program.title} className="w-full h-40 object-cover" />
                  <img
                    src={program.logo}
                    alt="logo"
                    className="absolute top-3 left-3 h-10 bg-white p-1 rounded shadow"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{program.title}</h3>
                  <p className="text-sm text-gray-700">Duration: <strong>{program.duration}</strong></p>
                  <p className="text-sm text-gray-700">Cohort Starts: <strong>{program.cohortStart}</strong></p>
                  <Link
                    to={`/courses/${program.id}`}
                    className="block text-center border mt-4 text-blue-600 border-blue-600 hover:bg-blue-50 py-2 rounded text-sm font-medium"
                  >
                    View Program
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPrograms;