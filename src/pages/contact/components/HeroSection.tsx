import HeroContent from "../../../components/sections/HeroContent";

const HeroSection = () => {
  return (
    <HeroContent>
      <h1 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px] text-center leading-[66px]">
        Lets connect, and{" "}
        <span className="text-dark-gray"> build the next big thing </span>
        together
      </h1>
    </HeroContent>
  );
};

export default HeroSection;
