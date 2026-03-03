import { useRef, useState } from "react";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import testimonialsInfo from "../../../apis/home/testimonials-section/testimonialsInfo";
import type { ITestimonialsInfo } from "../../../types/home/testimonials-section/typesTestimonials";
import SectionHeadingText from "../../../components/sections/SectionHeadingText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialsSection = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const chevronClass: string = "text-dark-gray text-[32px] cursor-pointer";

  const handleLeftClick = () => {
    let lastElement: number = testimonialsInfo.length - 1;

    setCurrentIdx((prev: number): number => {
      return prev === 0 ? lastElement : prev - 1;
    });
  };

  const handleRightClick = () => {
    let lastElement: number = testimonialsInfo.length - 1;

    setCurrentIdx((prev: number): number => {
      return prev === lastElement ? 0 : prev + 1;
    });
  };

  const testimonialsContainerRef = useRef<HTMLDivElement | null>(null);

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
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".testimonials-box", {
        opacity: 0,
        duration: 1,
        y: 80,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-box",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: testimonialsContainerRef },
  );

  return (
    <section
      ref={testimonialsContainerRef}
      className="custom-container py-[50px] md:py-[100px]"
    >
      <div className="section-header pb-[40px] md:pb-[60px] flex justify-between items-center">
        <SectionHeadingText text={"Testimonials"} />

        <div className="space-x-[20px] lg:space-x-[40px]">
          <button onClick={handleLeftClick}>
            <FaChevronLeft className={`left-[20px] ${chevronClass}`} />
          </button>
          <button onClick={handleRightClick}>
            <FaChevronRight className={`right-[20px] ${chevronClass}`} />
          </button>
        </div>
      </div>

      <div className="testimonials-box bg-dark-gray flex justify-start rounded-md overflow-x-hidden">
        {testimonialsInfo.map((elem: ITestimonialsInfo, idx: number) => {
          return (
            <div
              key={idx}
              className={`flex flex-col gap-[30px] sm:gap-[40px] lg:gap-[60px] items-center p-[30px] md:p-[40px] lg:p-[60px] min-w-full testimonial-card`}
              style={{ transform: `translateX(-${currentIdx * 100}%)` }}
            >
              <BsFillChatSquareQuoteFill className="text-smoke-white text-[30px] md:text-[36px] lg:text-[42px]" />
              <h1 className="text-smoke-white font-quicksand font-semibold text-[24px] sm:text-[26px] lg:text-[32px] leading-[36px] md:leading-[42px] text-center w-full max-w-[840px]">
                {elem.comment}
              </h1>

              <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[20px] items-center">
                <figure>
                  <img
                    src={elem.userImg}
                    alt="User Image"
                    className="h-[56px] md:h-[70px] w-[56px] md:w-[70px] rounded-full object-cover"
                  />
                </figure>
                <div className="text-center md:text-left">
                  <h2 className="text-smoke-white font-quicksand text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
                    {elem.userName}
                  </h2>
                  <h3 className="text-light-gray font-quicksand text-[18px] lg:text-[20px] font-semibold">
                    {elem.userPosition}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
