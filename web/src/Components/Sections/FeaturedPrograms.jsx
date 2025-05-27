import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/data-science.png';
import digital from '../../assets/digital.png';
import project from '../../assets/project.png';

// Could be loaded from an API or CMS in a real-world app
const featuredPrograms = [
  {
    title: 'Data Science Program',
    description: 'Master the fundamentals of data science and machine learning.',
    image: data,
    link: '/programs/data-science',
  },
  {
    title: 'Digital Marketing Program',
    description: 'Develop your skills in digital marketing to excel in the modern business world.',
    image: digital,
    link: '/programs/digital-marketing',
  },
  {
    title: 'Project Management Program',
    description: 'Learn to manage projects and lead teams successfully.',
    image: project,
    link: '/programs/project-management',
  },
];

const ProgramCard = ({ program }) => (
  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <img
      src={program.image}
      alt={program.title}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
      <p className="text-gray-600 mt-2">{program.description}</p>
      <Link
        to={program.link}
        className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-semibold"
      >
        Learn More →
      </Link>
    </div>
  </div>
);

const FeaturedPrograms = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Featured Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <ProgramCard key={program.title + index} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
