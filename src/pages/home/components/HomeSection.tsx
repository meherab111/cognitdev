import HeroSection from "../../../components/sections/HeroSection";

const HomeSection = () => {
  return (
    <HeroSection
      imgUrl="/images/home/home-section/home-image.webp"
      headingText="CognitDev"
      headingChildren={
        <>
          a{" "}
          <span className="text-medium-gray">software development company</span>{" "}
          building digital products for your business.
        </>
      }
      btnText="Let's Build Together"
    />
  );
};

export default HomeSection;
