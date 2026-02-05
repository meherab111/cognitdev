import CtaSection from "./components/CtaSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import InfinityScroll from "./components/InfinityScroll";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyUsSection from "./components/WhyUsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
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
