import { useGSAP } from "@gsap/react";
import Button from "../../../components/shared/Button";
import gsap from "gsap";
import { useRef } from "react";
import useHomePageReveal from "../../../hooks/useHomePageReveal";

const HeroSection = () => {
  const homeContainerRef = useRef<HTMLDivElement | null>(null);
  const preLoadingDone = useHomePageReveal(homeContainerRef);
  useGSAP(
    () => {
      if (!preLoadingDone) return;
      const tl: gsap.core.Timeline = gsap.timeline({
        defaults: { opacity: 0, duration: 1 },
      });

      tl.from(".home-image", {
        x: -50,
        ease: "power2.inOut",
      }).from(
        ".home-heading, .btn",
        {
          y: 30,
          stagger: 0.15,
          ease: "power3.inOut",
        },
        "-=0.3",
      );
    },
    { scope: homeContainerRef, dependencies: [preLoadingDone] },
  );

  return (
    <section
      ref={homeContainerRef}
      className="custom-container pt-[120px] lg:pt-[200px] pb-[50px] lg:pb-[100px] flex flex-col lg:flex-row gap-[20px] md:gap-[30px] items-center"
    >
      <figure className="home-image">
        <img
          src="/images/home/hero-section/hero-image.webp"
          alt="Hero Background Image"
          width="700"
          height="550"
          loading="eager"
          className="h-[42dvh] sm:h-[52dvh] lg:h-auto w-[600px] lg:w-[700px] object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col items-start gap-[20px] md:gap-[30px] lg:gap-[60px]">
        <div className="space-y-[20px] md:space-y-[30px]">
          <h1 className="home-heading font-quicksand tracking-tight text-dark-gray font-semibold text-[42px] md:text-[60px] xl:text-[90px] leading-none">
            CognitDev
          </h1>
          <h2 className="home-heading font-quicksand tracking-tight text-medium-gray font-medium text-[28px] md:text-[38px] xl:text-[52px] leading-[30px] md:leading-[46px] lg:leading-[52px] xl:leading-[66px]">
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
