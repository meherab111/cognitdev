import CtaSection from "../../components/sections/CtaSection";
import ExperienceSection from "./components/ExperienceSection";
import HomeSection from "./components/HomeSection";
import InfinityScroll from "./components/InfinityScroll";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyUsSection from "./components/WhyUsSection";

const Home = () => {
  return (
    <>
      <HomeSection />
      <WhyUsSection />
      <ExperienceSection />
      <ServicesSection />
      <TestimonialsSection />
      <InfinityScroll />
      <CtaSection />
    </>
  );
};

export default Home;
