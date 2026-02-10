import Button from "../../../components/shared/Button";

const HeroSection = () => {
  return (
    <section className="custom-container pt-[200px] pb-[100px] flex gap-[30px] items-center">
      <figure>
        <img
          src="/images/home/hero-section/hero-image.webp"
          alt="Hero Background Image"
          width="700"
          height="550"
          loading="eager"
          className="h-auto w-[700px] object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col gap-[60px]">
        <div className="space-y-[30px]">
          <h1 className="font-quicksand tracking-tight text-dark-gray font-semibold text-[90px] leading-none">
            CognitDev
          </h1>
          <h2 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px] leading-[66px]">
            a{" "}
            <span className="text-dark-gray">software development company</span>{" "}
            building digital products for your business.
          </h2>
        </div>

        <div>
          <Button link={"/contact"} btnTheme={"dark"}>
            Let's Build Together
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
