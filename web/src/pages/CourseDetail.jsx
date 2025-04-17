// src/pages/CourseDetail.jsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { FaClock, FaUsers, FaCertificate } from 'react-icons/fa';

function Accordion({ title, items }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-4 text-lg font-medium text-gray-800 hover:text-blue-600 transition"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className={`transform transition ${open ? 'rotate-180' : ''}`}>▼</span>
      </button>
      {open && (
        <ul className="pl-4 pb-4 text-gray-600 space-y-2">
          {items.map((itm, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-2">•</span> {itm}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Course not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500">
        <Link to="/" className="hover:text-gray-700">Home</Link> /{' '}
        <Link to="/courses" className="hover:text-gray-700">Courses</Link> /{' '}
        <span className="text-gray-900 font-medium">{course.title}</span>
      </nav>

      {/* Hero Image + Title */}
      <div className="text-center space-y-6">
        <img
          src={course.image}
          alt={course.title}
          className="mx-auto w-full max-w-3xl rounded-lg shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{course.title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{course.description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Left Panel */}
        <div className="md:col-span-2 space-y-8">
          {/* Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Course Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              {course.longDescription}
            </p>
          </section>

          {/* Stats */}
          <section className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-3">
              <FaClock className="text-blue-600 text-2xl" />
              <span className="text-gray-800 font-medium">{course.duration} Total Length</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaUsers className="text-blue-600 text-2xl" />
              <span className="text-gray-800 font-medium">{course.students} Students</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaCertificate className="text-blue-600 text-2xl" />
              <span className="text-gray-800 font-medium">Certificate Included</span>
            </div>
          </section>

          {/* Syllabus Accordion */}
          <section>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">What You’ll Learn</h3>
            {course.syllabus.map((module, idx) => (
              <Accordion key={idx} title={module.title} items={module.lessons} />
            ))}
          </section>

          {/* Benefits */}
          <section className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Why This Course?</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Hands‑on projects to build your portfolio</li>
              <li>Direct feedback from industry experts</li>
              <li>Lifetime access and on‑demand videos</li>
              <li>Join a community of {course.students} learners</li>
            </ul>
          </section>
        </div>

        {/* Right Panel */}
        <aside className="space-y-8">
          {/* Instructor Card */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img
              src={course.instructor.photo}
              alt={course.instructor.name}
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h4 className="mt-4 text-xl font-semibold text-gray-900">{course.instructor.name}</h4>
            <p className="text-gray-600">{course.instructor.title}</p>
            <Link to="/instructors" className="text-blue-600 hover:underline text-sm">
              View All Instructors
            </Link>
          </div>

          {/* Enroll CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg text-white text-center space-y-4">
            <p className="text-lg">Ready to get started?</p>
            <span className="block text-3xl font-bold">{course.price}</span>
            <button className="w-full bg-white text-blue-600 font-semibold py-3 rounded-md hover:opacity-90 transition">
              Enroll Now
            </button>
          </div>

          {/* Reviews Preview */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Student Reviews</h3>
            {course.reviews.slice(0, 2).map((r, i) => (
              <blockquote key={i} className="text-gray-700 mb-4">
                “{r.text}”
                <footer className="mt-2 text-sm text-gray-500">— {r.name}</footer>
              </blockquote>
            ))}
            <Link to={`/courses/${id}#reviews`} className="text-blue-600 hover:underline text-sm">
              Read all reviews
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
