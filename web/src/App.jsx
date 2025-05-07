import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home"; // moved from inline
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/course/:id" element={<Layout><CourseDetail /></Layout>} />
    </Routes>
  );
}

export default App;
