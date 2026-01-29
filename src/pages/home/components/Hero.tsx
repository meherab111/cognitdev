import Button from "../../../components/shared/Button";

const Hero = () => {
  const heroText: string = "text-dark-gray font-quicksand tracking-tight";

  return (
    <section className="custom-container pt-[240px] pb-[100px] flex gap-[30px]">
      <figure>
        <img
          src="/images/hero/hero-image.webp"
          alt="Hero Background Image"
          width="700"
          height="550"
          className="h-auto w-[700px] object-cover rounded-sm"
        />
      </figure>
      <div className="space-y-[60px]">
        <div>
          <h1 className={`${heroText} font-medium text-[90px]`}>CognitDev,</h1>
          <h2 className={`${heroText} font-light text-[52px]`}>
            a software development company building digital products for your
            business.
          </h2>
        </div>

        <Button link={"/contact"}>Let's Build Together</Button>
      </div>
    </section>
  );
};

export default Hero;
