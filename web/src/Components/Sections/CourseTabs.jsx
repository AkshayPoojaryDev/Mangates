import React, { useState } from "react";

const CourseTabs = ({ course }) => {
  const [activeTab, setActiveTab] = useState("Description");
  const tabs = [
    "Description",
    "Topics",
    "Features",
    "Certification",
    "Who Can Attend?",
    "FAQs",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return <p>{course?.longDescription}</p>;
      case "Topics":
        return (
          <ul className="list-disc ml-6 space-y-2">
            {course?.topics?.map((topic, i) => <li key={i}>{topic}</li>)}
          </ul>
        );
      case "Features":
        return (
          <ul className="list-disc ml-6 space-y-2">
            {course?.features?.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        );
      case "Certification":
        return <p>{course?.certification}</p>;
      case "Who Can Attend?":
        return <p>{course?.eligibility}</p>;
      case "FAQs":
        return (
          <div className="space-y-4">
            {course?.faqs?.map((faq, i) => (
              <div key={i}>
                <h4 className="font-semibold">{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-100 py-12 max-w-6xl mx-auto px-4">
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white p-6 rounded shadow text-gray-800">
        {renderContent()}
      </div>
    </section>
  );
};

export default CourseTabs;
