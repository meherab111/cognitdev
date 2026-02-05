import Button from "../../../components/shared/Button";

const HeroSection = () => {
  const heroText: string = "text-dark-gray font-quicksand tracking-tight";

  return (
    <section className="custom-container pt-[240px] pb-[100px] flex gap-[30px]">
      <figure>
        <img
          src="/images/home/hero/hero-image.webp"
          alt="Hero Background Image"
          width="700"
          height="550"
          loading="eager"
          className="h-auto w-full max-w-[700px] object-cover rounded-md"
        />
      </figure>
      <div className="space-y-[60px]">
        <div>
          <h1 className={`${heroText} font-semibold text-[90px]`}>
            CognitDev,
          </h1>
          <h2 className={`${heroText} font-medium text-[52px]`}>
            a <span className="text-medium-gray">software development company</span> building digital products for your
            business.
          </h2>
        </div>

        <Button link={"/contact"} btnTheme={"dark"}>Let's Build Together</Button>
      </div>
    </section>
  );
};

export default HeroSection;
