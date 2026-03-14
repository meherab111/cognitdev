import { useRef } from "react";
import AboutImage from "../../../components/sections/AboutImage";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ImageSection = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline({
        defaults: { opacity: 0, duration: 1, ease: "power2.inOut" },
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".image-left", {
        x: -50,
      }).from(
        ".image-right",
        {
          x: 50,
        },
        "<",
      );

      gsap.from(".experience-box", {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".experience-box",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: imageContainerRef },
  );
  return (
    <section
      ref={imageContainerRef}
      className="custom-container py-[50px] md:py-[100px] flex gap-[20px] md:gap-[40px] flex-col md:flex-row items-center overflow-hidden"
    >
      <AboutImage
        imgClass={"image-left"}
        imgSrc={"/images/about/image-section/about-image-01.webp"}
        imgSize={"large"}
        width={"800"}
        height={"550"}
      />
      <div className="space-y-[20px] md:space-y-[40px]">
        <AboutImage
          imgClass={"image-right"}
          imgSrc={"/images/about/image-section/about-image-02.webp"}
          imgSize={"small"}
          width={"500"}
          height={"400"}
        />
        <div className="experience-box bg-dark-gray h-fit w-full md:w-fit p-[42px] md:p-[50px] lg:p-[60px] space-y-[20px] rounded-md">
          <h1 className="font-quicksand font-semibold text-center text-[62px] md:text-[76px] lg:text-[96px] text-smoke-white leading-none">
            7+
          </h1>
          <h2 className="font-quicksand text-center font-medium text-[18px] md:text-[20px] text-light-gray">
            Years of Experience
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
