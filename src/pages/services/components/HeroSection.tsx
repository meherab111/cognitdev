import HeroContent from "../../../components/sections/HeroContent";

const HeroSection = () => {
  return (
    <HeroContent flexClass={true} btnText={"Start a Project"}>
      Explore our <span className="text-dark-gray"> specialized services </span>
      crafted for your business
    </HeroContent>
  );
};

export default HeroSection;
