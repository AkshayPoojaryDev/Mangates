import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CourseDetail from "./pages/Course-pages/CourseDetail";
import CourseList from "./pages/Course-pages/Course-list"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/course/:id" element={<Layout><CourseDetail /></Layout>} />
      <Route path="/courses" element={<Layout><CourseList /></Layout>} />
    </Routes>
  );
}

export default App;
