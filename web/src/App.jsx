import { Routes, Route } from "react-router-dom";
import Hero from "./Components/Sections/Hero";
import Courses from "./Components/Sections/Courses";
import WhyChooseUs from "./Components/Sections/CategoriesSection";
import Footer from "./layout/Footer";
import PartnersSection from "./Components/Sections/PartnersSection";
import FeaturedPrograms from "./Components/Sections/FeaturedPrograms";
import Testimonials from "./Components/Sections/Testimonials";
import TopPrograms from "./Components/Sections/TopPrograms";
import CourseDetail from "./pages/CourseDetail"; // ✅ Corrected import
import Layout from "./layout/Layout";

function HomePage() {
  return (
    <>
      <Hero />
      <Courses />
      <TopPrograms />
      <WhyChooseUs />
      <PartnersSection />
      <FeaturedPrograms />
      <Testimonials />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/course/:id" element={<Layout><CourseDetail /></Layout>} />
    </Routes>
  );
}

export default App;
