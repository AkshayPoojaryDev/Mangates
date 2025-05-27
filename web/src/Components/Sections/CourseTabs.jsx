import React, { useState } from "react";

const TABS = [
  { label: "Description", key: "longDescription" },
  { label: "Topics", key: "topics" },
  { label: "Features", key: "features" },
  { label: "Certification", key: "certification" },
  { label: "Who Can Attend?", key: "eligibility" },
  { label: "FAQs", key: "faqs" },
];

const CourseTabs = ({ course }) => {
  const [activeTab, setActiveTab] = useState(TABS[0].label);

  const renderContent = (tabKey) => {
    const content = course?.[tabKey];

    if (!content) return <p>No information available.</p>;

    if (Array.isArray(content)) {
      if (tabKey === "faqs") {
        return (
          <div className="space-y-4">
            {content.map((faq, i) => (
              <div key={i}>
                <h4 className="font-semibold">{faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        );
      }
      return (
        <ul className="list-disc ml-6 space-y-2">
          {content.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    return <p>{content}</p>;
  };

  return (
    <section className="bg-gray-100 py-12 max-w-6xl mx-auto px-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-6">
        {TABS.map(({ label }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === label
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-800 hover:bg-gray-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded shadow text-gray-800">
        {renderContent(TABS.find((t) => t.label === activeTab)?.key)}
      </div>
    </section>
  );
};

export default CourseTabs;
