import { useGSAP } from "@gsap/react";
import whyUsInfo from "../../../apis/home/why-us-section/whyUsInfo";
import SectionHeadingText from "../../../components/sections/SectionHeadingText";
import Button from "../../../components/shared/Button";
import type { IWhyUsInfo } from "../../../types/home/why-us-section/typesWhyUs";
import gsap from "gsap";
import { useRef } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyUsSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      // 1. Animate the Header (Heading + Button)
      gsap.from(".section-header", {
        scrollTrigger: {
          trigger: ".section-header",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true, // Starts when the top of header is 85% down the viewport
        },
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Animate the Info Cards with Stagger
      gsap.from(".why-card", {
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top 120%",
          
          scrub: true,
        },
        y: 30,
        opacity: 0,
        duration: 1.4,
        stagger: 0.3, // Each card follows the other with a 0.3s delay
        ease: "power4.out",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
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
              <h1 className="text-dark-gray font-quicksand font-semibold text-[72px] md:text-[100px] lg:text-[130px] leading-none tracking-0 lg:tracking-[-6px]">
                {elem.number}
              </h1>
              <h2 className="text-dark-gray font-quicksand text-[28px] md:text-[36px] lg:text-[42px] font-semibold">
                {elem.title}
              </h2>
              <p className="text-medium-gray font-quicksand text-[18px] md:text-[20px] font-medium">
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
