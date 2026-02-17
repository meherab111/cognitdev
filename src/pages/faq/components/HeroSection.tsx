import HeroContent from "../../../components/sections/HeroContent";

const HeroSection = () => {
  return (
    <HeroContent flexClass={true} btnText={"Ask Us Anything"}>
      <h1 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px] text-center leading-[66px]">
        FAQ,{" "}
        <span className="text-dark-gray"> everything you need to know </span>
        about us and how we work
      </h1>
    </HeroContent>
  );
};

export default HeroSection;
