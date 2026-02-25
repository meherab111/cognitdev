import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface IProps {
  animationDone: () => void;
}

const PreLoader = (props: IProps) => {
  const preloaderContainer = useRef<HTMLDivElement | null>(null);

  const { animationDone } = props;

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline({
        onComplete: animationDone,
      });

      tl.fromTo(
        ".preloader-logo",
        {
          opacity: 0,
          scale: 0.7,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power1.out",
        },
      );

      tl.fromTo(
        ".preloader-logo",
        {
          x: 200,
        },
        {
          x: 0,
          duration: 1,
          ease: "power3.inOut",
        },
      ).fromTo(
        ".preloader-text",
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        "<",
      );

      tl.to(preloaderContainer.current, {
        yPercent: -100,
        duration: 2,
        ease: "power4.inOut",
        delay: 0.5,
      });
    },
    { scope: preloaderContainer },
  );

  return (
    <section
      ref={preloaderContainer}
      className="fixed inset-0 z-150 flex items-center justify-center gap-[16px] h-full w-full bg-smoke-white"
    >
      <figure className="preloader-logo">
        <img
          src="/images/logo/cognitdev-logo.webp"
          alt="CognitDev Logo"
          width="90"
          height="90"
          className="h-auto w-[90px] object-contain"
        />
      </figure>

      <div className="preloader-text">
        <h1 className="font-quicksand tracking-tight text-dark-gray font-semibold text-[90px] leading-none">
          CognitDev
        </h1>
      </div>
    </section>
  );
};

export default PreLoader;
