import HeroSection from "../../../components/sections/HeroSection";

const AboutSection = () => {
  return (
    <HeroSection
      imgUrl="/images/about/about-section/about-image.webp"
      headingText="About Us"
      headingChildren={
        <>
          We partner with{" "}
          <span className="text-medium-gray">startups and businesses</span> to
          turn ideas into well engineered software solutions.
        </>
      }
      btnText="Start a Conversation"
    />
  );
};

export default AboutSection;
