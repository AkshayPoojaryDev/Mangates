import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      const querySnapshot = await getDocs(collection(db, "courses"));
      const coursesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(coursesData);
      setFilteredCourses(coursesData);
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    let updatedCourses = courses;

    if (selectedTag !== "All") {
      updatedCourses = updatedCourses.filter(
        (course) => course.tag === selectedTag
      );
    }

    if (searchTerm.trim()) {
      updatedCourses = updatedCourses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCourses(updatedCourses);
  }, [searchTerm, selectedTag, courses]);

  const uniqueTags = ["All", ...new Set(courses.map((course) => course.tag))];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
        Explore Our Top Programs
      </h1>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg shadow"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter Section (Animated) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showFilters ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } md:max-h-full md:opacity-100`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search for a course..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
            <div className="absolute inset-y-0 left-3 flex items-center text-gray-400 text-lg">
              <i className="fas fa-search"></i>
            </div>
          </div>

          {/* Dropdown Select */}
          <div className="relative w-full md:w-1/4">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full px-5 py-3 appearance-none border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
            >
              {uniqueTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center text-gray-500 pointer-events-none">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      {filteredCourses.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">No courses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/course/${course.id}`)}
              className="cursor-pointer border rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 bg-white"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-contain rounded mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {course.description}
              </p>
              <div className="text-sm text-gray-500 italic mb-1">
                Duration: {course.duration}
              </div>
              <div className="text-sm text-yellow-600 font-medium">
                {course.rating} ⭐
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
