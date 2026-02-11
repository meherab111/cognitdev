import Button from "../../../components/shared/Button";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[600px] mx-auto pt-[200px] pb-[100px] flex flex-col gap-[60px] items-center">
      <h1 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px] text-center leading-[66px]">
        FAQ,{" "}
        <span className="text-dark-gray"> everything you need to know </span>
        about us and how we work
      </h1>

      <div>
        <Button link={"/contact"} btnTheme={"dark"}>
          Ask Us Anything
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
