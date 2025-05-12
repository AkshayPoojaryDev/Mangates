import React from "react";

const CourseOverview = ({ duration, level, rating, overview }) => {
  return (
    <section className="bg-white py-10 border-b">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6 text-center">
        <div>
          <h4 className="text-sm text-gray-500">Duration</h4>
          <p className="text-lg font-medium">{duration || "N/A"}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">Level</h4>
          <p className="text-lg font-medium">{level || "N/A"}</p>
        </div>
        <div>
          <h4 className="text-sm text-gray-500">Rating</h4>
          <p className="text-lg font-medium">{rating || "N/A"}</p>
        </div>
        <div className="md:col-span-4 text-left pt-4 border-t mt-6">
          <h4 className="text-sm text-gray-500 mb-1">Overview</h4>
          <p className="text-base text-gray-700">{overview || "No overview provided."}</p>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
