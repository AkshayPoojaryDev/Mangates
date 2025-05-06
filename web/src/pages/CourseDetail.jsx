import React from "react";
import { useParams, Link } from "react-router-dom";
import courses from "../../data/courses";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    return <div className="text-center mt-10 text-red-500">Course not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <Link to="/" className="text-blue-600 mb-4 inline-block">← Back to Courses</Link>
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">{course.title}</h1>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded">{course.tag}</span>
            <span className="text-yellow-500 font-medium text-sm">★ {course.rating}</span>
          </div>
          <p className="text-gray-700 mb-4">{course.description}</p>
          <p className="text-sm font-medium text-blue-700">Category: {course.category}</p>
          <p className="text-sm font-medium text-blue-700 mt-2">Duration: {course.duration}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
