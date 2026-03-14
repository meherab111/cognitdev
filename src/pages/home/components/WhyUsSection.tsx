import { useGSAP } from "@gsap/react";
import whyUsInfo from "../../../apis/home/why-us-section/whyUsInfo";
import SectionHeadingText from "../../../components/sections/SectionHeadingText";
import Button from "../../../components/shared/Button";
import type { IWhyUsInfo } from "../../../types/home/why-us-section/typesWhyUs";
import { useRef } from "react";
import gsap from "gsap";

const WhyUsSection = () => {
  const whyUsContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".section-header", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      const cards: HTMLElement[] = gsap.utils.toArray<HTMLElement>(".why-card");

      cards.forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.from(".why-text", {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-card",
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });
      
    },
    { scope: whyUsContainerRef },
  );

  return (
    <section
      ref={whyUsContainerRef}
      className="custom-container py-[50px] md:py-[100px]"
    >
      <div className="section-header flex items-center justify-between pb-[40px] md:pb-[60px]">
        <SectionHeadingText text={"Why"}>
          <span className="hidden sm:inline"> CognitDev</span>
          <span className="inline sm:hidden"> Us</span>
        </SectionHeadingText>
        <div>
          <Button link={"/contact"} btnTheme={"dark"}>
            Get Started
          </Button>
        </div>
      </div>

      <div className="cards-container flex flex-col lg:flex-row gap-[30px] md:gap-[60px] lg:gap-[100px]">
        {whyUsInfo.map((elem: IWhyUsInfo) => {
          return (
            <div
              key={elem.number}
              className="why-card space-y-[12px] md:space-y-[20px] lg:space-y-[30px]"
            >
              <h1 className="why-text text-dark-gray font-quicksand font-semibold text-[72px] md:text-[100px] lg:text-[130px] leading-none tracking-0 lg:tracking-[-6px]">
                {elem.number}
              </h1>
              <h2 className="why-text text-dark-gray font-quicksand text-[28px] md:text-[36px] lg:text-[42px] font-semibold">
                {elem.title}
              </h2>
              <p className="why-text text-medium-gray font-quicksand text-[18px] md:text-[20px] font-medium">
                {elem.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUsSection;
