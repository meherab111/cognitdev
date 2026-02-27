import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import servicesInfo from "../../../apis/services/servicesInfo";
import type { IServicesInfo } from "../../../types/services/typesServices";
import SectionHeadingText from "../../../components/sections/SectionHeadingText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const AboutInfoSection = () => {


    const aboutInfoContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 0.8,
        },
        scrollTrigger: {
          trigger: aboutInfoContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(".section-header", {
        y: 70,
        ease: "power2.out",
      }).from(
        ".about-text",
        {
          y: 30,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.2",
      );
    },
    { scope: aboutInfoContainerRef },
  );

  return (
    <section ref={aboutInfoContainerRef} className="custom-container py-[50px] md:py-[100px] relative flex flex-col xl:flex-row justify-between">
      <div className="section-header block xl:sticky top-0 xl:top-[100px] h-fit w-fit pb-[30px] xl:pb-0">
        <SectionHeadingText text={"About CognitDev"} />
      </div>

      <div className="w-full max-w-[700px] space-y-[20px] md:space-y-[30px] lg:space-y-[40px]">
        <h2 className="about-text text-dark-gray font-quicksand text-[28px] lg:text-[32px] font-semibold">
          We're a forward thinking software development company focused on
          building reliable, scalable, and intelligent digital solutions.
        </h2>
        <h3 className="about-text text-medium-gray font-quicksand text-[20px] lg:text-[22px] font-medium">
          At the core of CognitDev is collaboration. We don't see our clients as
          just stakeholders. We treat them as partners in the digital product
          journey. Your ideas, insights, and business knowledge play a vital
          role in shaping the final result. <br /> By combining your vision with
          our technical expertise, we create software that is not only
          functional, but meaningful, future ready, and aligned with your
          business goals. <br />
          This collaborative approach helps us deliver products that truly
          reflect your brand values while solving real world problems through
          clean architecture and thoughtful engineering.
        </h3>

        <div className="space-y-[10px]">
          {servicesInfo.map((elem: IServicesInfo) => {
            return (
              <div
                key={elem.serviceId}
                className="about-text flex items-center gap-[10px]"
              >
                <IoMdCheckmarkCircleOutline className="text-[20px] lg:text-[22px]" />
                <p className="text-medium-gray font-quicksand text-[20px] lg:text-[22px] font-semibold">
                  {elem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutInfoSection;
