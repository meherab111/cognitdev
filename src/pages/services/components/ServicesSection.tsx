import HeroSection from "../../../components/sections/HeroSection";

const ServicesSection = () => {
  return (
    <HeroSection
      imgUrl="/images/services/services-section/service-image.webp"
      headingText="Our Services"
      headingChildren={
        <>
          End to end{" "}
          <span className="text-dark-gray">
            'software development services'
          </span>{" "}
          tailored to your business needs
        </>
      }
      btnText="Start Your Project"
    />
  );
};

export default ServicesSection;
