import { useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import faqInfo from "../../../apis/faq/faqInfo";
import type { IFaqInfo } from "../../../types/faq/typesFaq";
import SectionHeadingText from "../../../components/sections/SectionHeadingText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FaqSection = () => {
  const [toggle, setToggle] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    setToggle(toggle === index ? null : index);
  };

  const faqContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 0.8,
        },
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(".section-header", {
        y: 70,
        ease: "power2.out",
      }).from(
        ".faq-box",
        {
          y: -30,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3",
      );
    },
    { scope: faqContainerRef },
  );

  const questionClass: string =
    "font-quicksand text-[26px] lg:text-[32px] font-semibold text-dark-gray leading-[32px]";

  return (
    <section
      ref={faqContainerRef}
      className="custom-container py-[50px] md:py-[100px]"
    >
      <div className="section-header w-fit pb-[40px] md:pb-[60px]">
        <SectionHeadingText text={"FAQ"} />
      </div>
      <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]">
        {faqInfo.map((elem: IFaqInfo, idx: number) => {
          return (
            <div
              key={elem.number}
              onClick={() => handleToggle(idx)}
              className="faq-box flex gap-[30px] md:gap-[40px] lg:gap-[60px] justify-between border-b-1 border-b-light-gray/30 pb-[10px] md:pb-[20px] cursor-pointer"
            >
              <div className="flex gap-[16px] md:gap-[30px]">
                <p className={questionClass}>{elem.number}</p>

                <div className="space-y-[14px] md:space-y-[20px]">
                  <h2 className={questionClass}>{elem.question}</h2>
                  <h3
                    className={`faq-answer font-quicksand font-medium text-[20px] md:text-[22px] text-medium-gray ${idx === toggle ? "max-h-[300px] opacity-100 pb-[10px]" : "max-h-0 opacity-0"}`}
                  >
                    {elem.answer}
                  </h3>
                </div>
              </div>

              <div className="pt-[6px] md:pt-0">
                <ImCross
                  className={`text-[20px] md:text-[22px] faq-icon ${idx === toggle ? "rotate-90" : "rotate-45"}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
