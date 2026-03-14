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

      gsap.from(".about-text", {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-info",
          start: "top 72%",
          toggleActions: "play none none none",
        },
      });

      const infos: HTMLElement[] =
        gsap.utils.toArray<HTMLElement>(".about-infos");

      infos.forEach((info) => {
        gsap.from(info, {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: info,
            start: "top 72%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: aboutInfoContainerRef },
  );

  return (
    <section
      ref={aboutInfoContainerRef}
      className="custom-container py-[50px] md:py-[100px] relative flex flex-col xl:flex-row justify-between"
    >
      <div className="section-header block xl:sticky top-0 xl:top-[100px] h-fit w-fit pb-[30px] xl:pb-0">
        <SectionHeadingText text={"About CognitDev"} />
      </div>

      <div className="about-info w-full max-w-[700px] space-y-[20px] md:space-y-[30px] lg:space-y-[40px]">
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

        <div className="about-infos space-y-[10px]">
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
