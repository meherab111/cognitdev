import React, { useRef } from "react";
import experienceInfo from "../../../apis/home/experience-section/experienceInfo";
import type { IExperienceInfo } from "../../../types/home/experience-section/typesExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ExperienceSection = () => {
  const experienceContainerRef = useRef<HTMLDivElement | null>(null);
  const borderLength: number = experienceInfo.length - 1;

  useGSAP(
    () => {
      gsap.from(".experience-box", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".experience-box",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      const items: HTMLElement[] =
        gsap.utils.toArray<HTMLElement>(".experience-items");

      items.forEach((item) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: experienceContainerRef },
  );

  return (
    <section
      ref={experienceContainerRef}
      className="py-[50px] md:py-[100px] px-[20px] lg:px-0"
    >
      <div className="experience-box custom-container bg-dark-gray flex flex-col lg:flex-row justify-around gap-[30px] md:gap-[40px] lg:gap-[60px] rounded-md py-[60px]">
        {experienceInfo.map((elem: IExperienceInfo, idx: number) => (
          <React.Fragment key={idx}>
            <div className="experience-items space-y-[20px] cursor-pointer hover:-translate-y-2">
              <h1 className="experience-text font-quicksand font-semibold text-center text-[58px] md:text-[72px] lg:text-[96px] text-smoke-white leading-none">
                {elem.stat}
              </h1>
              <h2 className="experience-text font-quicksand text-center font-medium text-[18px] md:text-[20px] text-light-gray">
                {elem.label}
              </h2>
            </div>

            {idx < borderLength && (
              <div className="border-r-1 border-light-gray"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
