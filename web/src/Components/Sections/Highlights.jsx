import React from "react";

const Highlights = ({ highlights }) => {
  return (
    <section className="bg-white py-12 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Training Highlights</h2>
      <ul className="space-y-3 mb-6">
        {highlights?.map((item, i) => (
          <li key={i} className="flex items-start text-gray-700">
            <span className="text-green-600 mr-2">✔</span>
            {item}
          </li>
        ))}
      </ul>
      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm font-semibold">
        📄 Course Factsheet
      </button>
    </section>
  );
};

export default Highlights;
