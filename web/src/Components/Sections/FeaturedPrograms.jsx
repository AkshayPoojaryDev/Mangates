import data from '../../assets/data-science.png';
import digital from '../../assets/digital.png';
import project from '../../assets/project.png';
import React from 'react';

const FeaturedPrograms = () => {
  // Sample programs data, you can replace with dynamic content
  const featuredPrograms = [
    {
      title: 'Data Science Program',
      description: 'Master the fundamentals of data science and machine learning.',
      image: data, // Replace with actual image URL
      link: '/programs/data-science',
    },
    {
      title: 'Digital Marketing Program',
      description: 'Develop your skills in digital marketing to excel in the modern business world.',
      image: digital, // Replace with actual image URL
      link: '/programs/digital-marketing',
    },
    {
      title: 'Project Management Program',
      description: 'Learn to manage projects and lead teams successfully.',
      image: project, // Replace with actual image URL
      link: '/programs/project-management',
    },
    // Add more programs here as necessary
  ];

  return (
    <section className="featured-programs py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <div key={index} className="program-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                <p className="text-gray-600 mt-2">{program.description}</p>
                <a
                  href={program.link}
                  className="text-blue-600 hover:text-blue-800 mt-4 inline-block font-semibold"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
