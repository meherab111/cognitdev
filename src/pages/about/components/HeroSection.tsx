import HeroContent from "../../../components/sections/HeroContent";

const HeroSection = () => {
  return (
    <HeroContent flexClass={true} btnText={"Work With Us"}>
      <h1 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px] text-center leading-[66px]">
        Together, we build{" "}
        <span className="text-dark-gray"> digital products </span>
        for your ambitious company
      </h1>
    </HeroContent>
  );
};

export default HeroSection;
