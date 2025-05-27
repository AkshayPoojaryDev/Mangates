import React from "react";
import { motion } from "framer-motion";

// This can be moved to a separate config or fetched from a backend in the future
const categories = [
  { name: "Data Science", icon: "📊" },
  { name: "Cyber Security", icon: "🛡️" },
  { name: "Cloud Computing", icon: "☁️" },
  { name: "DevOps", icon: "⚙️" },
  { name: "AI & ML", icon: "🤖" },
  { name: "Project Management", icon: "📈" },
];

const CategoryCard = ({ category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="flex flex-col items-center justify-center bg-blue-50 rounded-lg py-6 shadow hover:shadow-md hover:bg-blue-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
    role="button"
    tabIndex={0}
    aria-label={`Explore ${category.name} category`}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        // future click action
      }
    }}
  >
    <div className="text-4xl mb-2">{category.icon}</div>
    <p className="text-sm font-medium text-center text-blue-900">{category.name}</p>
  </motion.div>
);

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-900">
          Explore Top Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
