import Button from "../../../components/shared/Button";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[600px] mx-auto pt-[200px] pb-[50px] flex flex-col gap-[60px] items-center">
      <h1 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px] text-center leading-[66px]">
        Together, we build{" "}
        <span className="text-dark-gray"> digital products </span>
        for your ambitious company
      </h1>

      <div>
        <Button link={"/contact"} btnTheme={"dark"}>
          Work With Us
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
