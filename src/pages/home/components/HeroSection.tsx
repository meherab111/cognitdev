import { useGSAP } from "@gsap/react";
import Button from "../../../components/shared/Button";
import gsap from "gsap";
import { useRef } from "react";

const HeroSection = () => {
  const homeContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline({
        defaults: { duration: 0.8 },
      });

      tl.from(".home-image", {
        x: -50,
        opacity: 0,
        ease: "power1.out",
      }).from(
        ".home-heading, .btn",
        {
          y: 30,
          opacity: 0,
          stagger: 0.3,
          ease: "power3.inOut",
        },
        "-=0.4",
      );
    },
    { scope: homeContainerRef },
  );

  return (
    <section
      ref={homeContainerRef}
      className="custom-container pt-[140px] md:pt-[200px] pb-[50px] md:pb-[100px] flex gap-[20px] md:gap-[30px] items-center"
    >
      <figure className="home-image">
        <img
          src="/images/home/hero-section/hero-image.webp"
          alt="Hero Background Image"
          width="700"
          height="550"
          loading="eager"
          className="h-[300px] lg:h-auto w-[600px] lg:w-[650px] xl:w-[700px] object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col items-start gap-[20px] md:gap-[30px] lg:gap-[60px]">
        <div className="space-y-[20px] md:space-y-[30px]">
          <h1 className="home-heading font-quicksand tracking-tight text-dark-gray font-semibold text-[38px] md:text-[60px] xl:text-[90px] leading-none">
            CognitDev
          </h1>
          <h2 className="home-heading font-quicksand tracking-tight text-medium-gray font-medium text-[24px] md:text-[38px] xl:text-[52px] leading-[30px] md:leading-[52px] xl:leading-[66px]">
            a{" "}
            <span className="text-dark-gray">software development company</span>{" "}
            building digital products for your business.
          </h2>
        </div>

        <div className="btn">
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
