import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Courses from "./components/Courses";
import WhyChooseUs from "./components/CategoriesSection";
import Footer from "./components/Footer";
import PartnersSection from "./components/PartnersSection";
import FeaturedPrograms from "./components/FeaturedPrograms";
import Testimonials from "./components/Testimonials";
import TopPrograms from "./components/TopPrograms";

function App() {
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
export default App;
