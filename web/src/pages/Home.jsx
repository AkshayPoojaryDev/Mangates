import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaQuoteLeft } from 'react-icons/fa';
import CourseCard from '../Components/CourseCard';

import pythonImg from '../assets/python.png';
import reactImg from '../assets/react.png';
import dataScienceImg from '../assets/data-science.png';
import blockchainImg from '../assets/blockchain.png';
import marketingImg from '../assets/marketing.png';
import cloudImg from '../assets/cloud.png';

const Home = () => {
  const topCourses = [
    { id: 'python-basics', title: 'Python Basics', description: 'Learn Python fundamentals.', image: pythonImg, price: 99 },
    { id: 'react-advanced', title: 'Advanced React', description: 'Deep dive into React hooks and context.', image: reactImg, price: 119 },
    { id: 'data-science-masterclass', title: 'Data Science Masterclass', description: 'Analyze data and build ML models.', image: dataScienceImg, price: 149 },
  ];

  const topCategories = ['AI & ML', 'Web Development', 'Data Science', 'UI/UX Design', 'Marketing', 'Cloud Computing'];

  const latestCourses = [
    { id: 'blockchain-fundamentals', title: 'Blockchain Fundamentals', description: 'Understand distributed ledgers and smart contracts.', image: blockchainImg, price: 129 },
    { id: 'digital-marketing', title: 'Digital Marketing Mastery', description: 'SEO, SEM, social media and more.', image: marketingImg, price: 89 },
    { id: 'cloud-computing', title: 'Intro to Cloud Computing', description: 'AWS, Azure, and GCP essentials.', image: cloudImg, price: 99 },
    { id: 'python-basics-2', title: 'Python for Data Analysis', description: 'Pandas, NumPy and data visualization.', image: pythonImg, price: 109 },
  ];

  const features = [
    { title: 'Flexible Learning', desc: 'Study at your own pace with access to materials 24/7.' },
    { title: 'Expert Instructors', desc: 'Learn from industry professionals with real-world experience.' },
    { title: 'Certification', desc: 'Earn recognized certificates to boost your resume.' },
  ];

  const testimonials = [
    { name: 'Emily R.', feedback: 'This platform helped me get certified and land my dream job. The instructors are top‑notch!' },
    { name: 'James W.', feedback: 'Great content, flexible schedule, and amazing support team. Highly recommend to everyone.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Unlock Your Potential with <span className="text-white/90">World‑Class Courses</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Learn anytime, anywhere with industry‑leading instructors and career‑focused training.
        </p>
        <Link to="/courses">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition">
            Explore Courses
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 text-white rounded-full p-3">
                  <FaCheckCircle className="text-xl" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Courses Section */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">🔥 Top Courses</h2>
          <p className="text-center text-gray-600 mb-10">Most popular courses among our learners</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">📚 Top Categories</h2>
          <p className="text-gray-600 mb-8">Most explored categories by learners</p>
          <div className="flex flex-wrap justify-center gap-4">
            {topCategories.map((category, i) => (
              <span
                key={i}
                className="bg-blue-50 text-blue-900 px-5 py-2 rounded-full font-medium shadow-sm hover:bg-blue-100 transition"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Courses Section */}
      <section className="py-14 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">🆕 Latest Courses</h2>
          <p className="text-center text-gray-600 mb-10">Explore the newest content from top instructors</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestCourses.map(course => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md text-left">
                <FaQuoteLeft className="text-blue-600 text-2xl mb-3" />
                <p className="text-gray-700 mb-4">{testimonial.feedback}</p>
                <p className="font-semibold text-blue-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to start learning?</h2>
        <p className="text-lg mb-6">
          Join thousands of learners and gain access to expert‑led courses and career‑building resources.
        </p>
        <Link to="/join">
          <button className="bg-white text-blue-700 px-6 py-3 text-lg font-semibold rounded-full hover:bg-blue-100 transition">
            Get Started Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default Home;
