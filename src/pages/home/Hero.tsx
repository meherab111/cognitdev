import Button from "../../components/Button";

const Hero = () => {
  const heroText: string = "text-dark-gray font-quicksand tracking-tight";

  return (
    <section className="h-screen custom-container pt-[240px] flex gap-[30px]">
      <figure>
        <img
          src="/images/hero/hero-image.webp"
          alt="Hero Background Image"
          className="h-[500px] w-[700px] object-cover"
        />
      </figure>
      <div className="space-y-[60px]">
        <div>
          <h1 className={`${heroText} font-medium text-[90px] `}>CognitDev,</h1>
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
