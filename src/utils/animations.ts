interface IScrollRevealProps {
  y?: number;
}

interface IScrollTriggerProps {
  trigger: gsap.DOMTarget | undefined;
  start: string | undefined;
}

export const getScrollReveal = (props: IScrollRevealProps) => {
  const { y } = props;

  return {
    y,
    opacity: 0,
    duration: 1,
  };
};

export const getScrollTrigger = (props: IScrollTriggerProps) => {
  const { trigger, start } = props;

  return {
    trigger,
    start,
    toggleActions: "play none none none",
  };
};
