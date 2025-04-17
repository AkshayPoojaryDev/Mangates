// src/data/courses.js

// 1️⃣ Import your course images
import pythonImg from '../assets/python.png';
import reactImg from '../assets/react.png';
import dataScienceImg from '../assets/data-science.png';
import blockchainImg from '../assets/blockchain.png';
import marketingImg from '../assets/marketing.png';
import cloudImg from '../assets/cloud.png';

export const courses = [
  {
    id: 'python-basics',
    title: 'Python Basics',
    description: 'Learn the fundamentals of Python.',
    longDescription:
      'A deep dive into Python syntax, data structures, and practical applications.',
    image: pythonImg,
    duration: '6h 30m',
    students: '8k+',
    price: '$99',
    instructor: {
      name: 'Jane Doe',
      title: 'Senior Python Developer',
      photo: '/assets/jane.jpg', // if in public/assets
    },
    syllabus: [
      { title: 'Intro & Setup', lessons: ['Installing Python', 'Hello World'] },
      { title: 'Control Flow', lessons: ['if/else', 'loops'] },
      // …add more modules
    ],
    reviews: [
      { name: 'Alice', text: 'Great intro to Python!' },
      { name: 'Bob', text: 'Very practical and hands‑on.' },
    ],
  },
  {
    id: 'react-advanced',
    title: 'Advanced React',
    description: 'Deep dive into React hooks and context.',
    longDescription:
      'Master React Hooks, Context API, and performance optimizations with real‑world examples.',
    image: reactImg,
    duration: '5h 45m',
    students: '5k+',
    price: '$119',
    instructor: {
      name: 'John Smith',
      title: 'Lead Front‑end Engineer',
      photo: '/assets/john.jpg',
    },
    syllabus: [
      { title: 'Hooks Deep Dive', lessons: ['useState', 'useEffect', 'useContext'] },
      { title: 'Performance', lessons: ['Memoization', 'Lazy Loading'] },
      // …
    ],
    reviews: [
      { name: 'Carol', text: 'Hooks explanations were top‑notch.' },
      { name: 'Dan', text: 'Learned a lot about optimization!' },
    ],
  },
  {
    id: 'data-science-masterclass',
    title: 'Data Science Masterclass',
    description: 'Analyze data and build ML models.',
    longDescription:
      'From data cleaning to machine learning, get hands‑on with Python libraries like Pandas and scikit‑learn.',
    image: dataScienceImg,
    duration: '8h 10m',
    students: '3k+',
    price: '$149',
    instructor: {
      name: 'Emily Clark',
      title: 'Data Scientist',
      photo: '/assets/emily.jpg',
    },
    syllabus: [
      { title: 'Data Wrangling', lessons: ['Pandas', 'NumPy'] },
      { title: 'Modeling', lessons: ['Linear Regression', 'Classification'] },
      // …
    ],
    reviews: [
      { name: 'Frank', text: 'Great coverage of Pandas!' },
      { name: 'Grace', text: 'Models section was very clear.' },
    ],
  },
  // …you can add more courses likewise
];
