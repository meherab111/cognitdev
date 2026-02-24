import HeroContent from "../../../components/sections/HeroContent";

const HeroSection = () => {
  return (
    <HeroContent flexClass={true} btnText={"Ask Us Anything"}>
      FAQ, <span className="text-dark-gray"> everything you need to know </span>
      about us and how we work
    </HeroContent>
  );
};

export default HeroSection;
