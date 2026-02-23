import Button from "../../../components/shared/Button";

const HeroSection = () => {
  return (
    <section className="custom-container pt-[140px] md:pt-[200px] pb-[50px] md:pb-[100px] flex gap-[20px] md:gap-[30px] items-center">
      <figure>
        <img
          src="/images/home/hero-section/hero-image.webp"
          alt="Hero Background Image"
          width="700"
          height="550"
          loading="eager"
          className="h-[300px] lg:h-auto w-[400px] lg:w-[650px] xl:w-[700px] object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col items-start gap-[20px] md:gap-[30px] lg:gap-[60px]">
        <div className="space-y-[20px] md:space-y-[30px] text-left">
          <h1 className="font-quicksand tracking-tight text-dark-gray font-semibold text-[38px] md:text-[60px] xl:text-[90px] leading-none">
            CognitDev
          </h1>
          <h2 className="font-quicksand tracking-tight text-medium-gray font-medium text-[24px] md:text-[38px] xl:text-[52px] leading-[30px] md:leading-[52px] xl:leading-[66px]">
            a{" "}
            <span className="text-dark-gray">software development company</span>{" "}
            building digital products for your business.
          </h2>
        </div>

        <div>
          <Button link={"/contact"} btnTheme={"dark"}>
            Let's Build
            <span className="hidden sm:inline"> Together</span>
            <span className="inline sm:hidden"></span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
