import React from "react";
import usePreloader from "./usePreloader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useHomePageReveal = (
  containerRef: React.RefObject<HTMLDivElement | null>,
) => {
  const { isPreLoading } = usePreloader();

  const preLoadingDone: boolean = !isPreLoading;

  useGSAP(
    () => {
      if (preLoadingDone) {
        gsap.set(containerRef.current, {
          opacity: 1,
        });
      } else {
        gsap.set(containerRef.current, {
          opacity: 0,
        });
      }
    },
    { scope: containerRef, dependencies: [preLoadingDone] },
  );

  return preLoadingDone;
};

export default useHomePageReveal;
