// import React from "react";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Alex J.",
//     feedback: "The Data Science program helped me land a job at Amazon. Excellent curriculum!",
//     image: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     name: "Samantha R.",
//     feedback: "The instructors are top-notch and the support is amazing. Highly recommended!",
//     image: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     name: "David K.",
//     feedback: "Loved the flexibility and the project-based learning approach.",
//     image: "https://randomuser.me/api/portraits/men/45.jpg"
//   }
// ];

// const Testimonials = () => {
//   return (
//     <section className="bg-blue-50 py-16">
//       <div className="max-w-5xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-blue-900 mb-10">What Our Learners Say</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
//             >
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-16 h-16 rounded-full mx-auto mb-4"
//               />
//               <p className="text-gray-700 text-sm italic mb-3">"{item.feedback}"</p>
//               <h4 className="font-semibold text-blue-700">{item.name}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex J.",
    feedback: "The Data Science program helped me land a job at Amazon. Excellent curriculum!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Samantha R.",
    feedback: "The instructors are top-notch and the support is amazing. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David K.",
    feedback: "Loved the flexibility and the project-based learning approach.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-10">What Our Learners Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 text-sm italic mb-3">"{item.feedback}"</p>
              <h4 className="font-semibold text-blue-700">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
