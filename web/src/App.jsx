import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Hero from "./Components/Sections/Hero";
import Courses from "./Components/Sections/Courses";
import WhyChooseUs from "./Components/Sections/CategoriesSection";
import Footer from "./layout/Footer";
import PartnersSection from "./Components/Sections/PartnersSection";
import FeaturedPrograms from "./Components/Sections/FeaturedPrograms";
import Testimonials from "./Components/Sections/Testimonials";
import TopPrograms from "./Components/Sections/TopPrograms";
import CourseDetail from "./Components/Sections/Courses";

function HomePage() {
  return (
    <>
      <Header />
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
      <Route path="/" element={<HomePage />} />
      <Route path="/course/:id" element={<CourseDetail />} />
    </Routes>
  );
}

export default App;
