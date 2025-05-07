import Hero from "../Components/Sections/Hero";
import Courses from "../Components/Sections/Courses";
import WhyChooseUs from "../Components/Sections/CategoriesSection";
import Footer from "../layout/Footer";
import PartnersSection from "../Components/Sections/PartnersSection";
import FeaturedPrograms from "../Components/Sections/FeaturedPrograms";
import Testimonials from "../Components/Sections/Testimonials";
import TopPrograms from "../Components/Sections/TopPrograms";

function Home() {
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

export default Home;
