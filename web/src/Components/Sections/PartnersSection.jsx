import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://cdn.simplilearn.com/ice9/assets/stanford-university_logo_v2.svg",
  "https://cdn.simplilearn.com/ice9/assets/caltech-logo.svg",
  "https://cdn.simplilearn.com/ice9/assets/UMass-logo.svg",
  "https://cdn.simplilearn.com/ice9/assets/iit-kanpur-logo.svg",
  "https://cdn.simplilearn.com/ice9/assets/Wharton_Logo.svg",
  "https://cdn.simplilearn.com/ice9/assets/uc-berkeley-logo.svg"
];

const PartnersSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
          Our University Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img src={logo} alt="partner-logo" className="h-12 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

