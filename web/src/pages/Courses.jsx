// src/pages/Courses.jsx
import React from 'react';
import CourseCard from '../Components/CourseCard';
import { courses } from '../data/courses';

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Courses</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
