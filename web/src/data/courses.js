import datamaster from "../assets/DataMaster.png";
import cloudImg from "../assets/cloud.png";
import ai from "../assets/Ai&ML.png";
import pythonImg from "../assets/python.png";
import reactImg from "../assets/react.png";
import dataScienceImg from "../assets/data-science.png";
import blockchainImg from "../assets/blockchain.png";
const courses = [
  {
    id: "data-science-master-program",
    title: "Data Science Master Program",
    category: "Data Science",
    description: "Comprehensive training in data analysis and ML tools.",
    image: datamaster,
    rating: 4.6,
    duration: "12 Months",
    tag: "Best Seller",
  },
  {
    id: "cloud-computing-certification",
    title: "Cloud Computing Certification",
    category: "Cloud",
    description: "Learn AWS, Azure, and GCP with hands-on labs.",
    image: cloudImg,
    rating: 4.5,
    duration: "6 Months",
    tag: "University Program",
  },
  {
    id: "ai-ml-course",
    title: "AI & ML Course",
    category: "AI & ML",
    description: "Build models using TensorFlow, Keras, and more.",
    image: ai,
    rating: 4.7,
    duration: "8 Months",
    tag: "Trending",
  },
  {
    id: "pmp-certification-training",
    title: "PMP® Certification Training",
    category: "Project Management",
    description: "Learn the fundamentals of project management with PMP® certification.",
    image: pythonImg,
    rating: 4.6,
    duration: "4 Weeks",
    tag: "Best Seller",
  },
  {
    id: "executive-program-cybersecurity",
    title: "Advanced Executive Program in Cybersecurity",
    category: "Cyber Security",
    description: "Deep dive into cybersecurity concepts and practices.",
    image: reactImg,
    rating: 4.7,
    duration: "6 Months",
    tag: "University Program",
  },
  {
    id: "certified-scrum-master",
    title: "Certified ScrumMaster (CSM)",
    category: "Agile and Scrum",
    description: "Master Scrum framework and earn CSM certification.",
    image: dataScienceImg,
    rating: 4.5,
    duration: "3 Days",
    tag: "Trending",
  },
  {
    id: "data-analyst-program",
    title: "Data Analyst",
    category: "Data Science & Business Analytics",
    description: "Learn data analysis with tools like Python, R, and SQL.",
    image: blockchainImg,
    rating: 4.8,
    duration: "6 Months",
    tag: "Best Seller",
  },
];
export default courses;