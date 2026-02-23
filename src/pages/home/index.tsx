import CtaSection from "../../components/sections/CtaSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import InfinityScrollSection from "./components/InfinityScrollSection";
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
      {/* <TestimonialsSection />
      <InfinityScrollSection />
      <CtaSection /> */}
    </>
  );
};

export default Home;
