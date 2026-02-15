import HeroContent from "../../../components/sections/HeroContent";

const HeroSection = () => {
  return (
    <HeroContent
      flexClass={"flex flex-col gap-[60px] items-center"}
      btnText={"Start a Project"}
    >
      <h1 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px] text-center leading-[66px]">
        Explore our{" "}
        <span className="text-dark-gray"> specialized services </span>
        crafted for your business
      </h1>
    </HeroContent>
  );
};

export default HeroSection;
