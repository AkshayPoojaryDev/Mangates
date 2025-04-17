import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
