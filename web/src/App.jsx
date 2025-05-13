import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CourseDetail from "./pages/Course-pages/CourseDetail";
import CourseList from "./pages/Course-pages/Course-list";
import AddCourse from "./Admin-Pages/pages/AddCourse"
import ManageCourses from "./Admin-Pages/pages/ManageCourses"
import AdminDashboard from "./Admin-Pages/pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/course/:courseId" element={<Layout><CourseDetail /></Layout>} />
      <Route path="/courses" element={<Layout><CourseList /></Layout>} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<Layout><AdminDashboard /></Layout>} /> 
     <Route path="/admin/add-course" element={<Layout><AddCourse /></Layout>} />
      <Route path="/admin/manage-courses" element={<Layout><ManageCourses /></Layout>} />
    </Routes>
  );
}

export default App;
