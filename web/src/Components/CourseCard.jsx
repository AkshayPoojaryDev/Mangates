import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, description, image, price }) => (
  <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-semibold">${price}</span>
        <Link
          to={`/courses/${id}`}
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default CourseCard;
