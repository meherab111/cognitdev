import HeroContent from "../../../components/sections/HeroContent";

const HeroSection = () => {
  return (
    <HeroContent flexClass={true} btnText={"Work With Us"}>
      Together, we build{" "}
      <span className="text-dark-gray"> digital products </span>
      for your ambitious company
    </HeroContent>
  );
};

export default HeroSection;
