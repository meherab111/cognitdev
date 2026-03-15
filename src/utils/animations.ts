interface IScrollReveal {
  y: number;
  opacity: number;
  duration: number;
}

interface IProps {
  trigger: gsap.DOMTarget | undefined;
  start: string | undefined;
}

export const scrollReveal: IScrollReveal = {
  y: 80,
  opacity: 0,
  duration: 1,
};

export const getScrollInfo = (props: IProps) => {
  const { trigger, start } = props;

  return {
    trigger,
    start,
    toggleActions: "play none none none",
  };
};
