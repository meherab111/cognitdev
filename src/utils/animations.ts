// reveal props
interface IScrollRevealProps {
  y?: number;
}
// trigger props 
interface IScrollTriggerProps {
  trigger: gsap.DOMTarget | undefined;
  start: string | undefined;
}
// functions here
export const getScrollReveal = (props: IScrollRevealProps) => {
  const { y } = props;

  return {
    y,
    opacity: 0,
    duration: 1,
  };
};
// functions here
export const getScrollTrigger = (props: IScrollTriggerProps) => {
  const { trigger, start } = props;

  return {
    trigger,
    start,
    toggleActions: "play none none none",
  };
};
