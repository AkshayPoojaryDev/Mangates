import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses"; // Make sure this path is correct

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl">
        Course not found.
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-8 md:p-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">{course.title}</h1>
            <p className="text-lg mb-4">{course.description}</p>
            <p className="text-md italic mb-2">Duration: {course.duration}</p>
            <p className="text-md italic mb-2">Rating: {course.rating} ⭐</p>
            <p className="text-sm bg-yellow-400 inline-block px-3 py-1 rounded-full text-black font-semibold mt-2">
              {course.tag}
            </p>

            {course.features && (
              <>
                <h3 className="mt-6 text-xl font-semibold">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {course.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            )}
            <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300">
              Enroll Now
            </button>
          </div>
          <div className="bg-white p-2 rounded-2xl shadow-2xl border border-gray-200 hover:scale-105 transition-transform duration-300">
          <img
            src={course.image}
            alt={course.title}
            className="w-64 h-64 object-contain rounded-xl"
          />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {course.overview && (
        <section className="max-w-7xl mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold mb-6">{course.title} Overview</h2>
          <p className="text-lg mb-4">{course.overview}</p>

          {course.highlights && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {course.highlights.map((item, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded shadow">
                  {item}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Curriculum Section */}
      {course.curriculum && (
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Curriculum</h3>
            {Object.entries(course.curriculum).map(([module, topics], i) => (
              <div key={i} className="mb-6">
                <h4 className="text-xl font-semibold mb-2">{module}</h4>
                <ul className="list-disc list-inside space-y-1">
                  {topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CourseDetail;
