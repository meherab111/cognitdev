import { useRef, type ReactNode } from "react";
import Button from "../../components/shared/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface IProps {
  flexClass?: boolean;
  children: ReactNode;
  btnText?: string;
}

const HeroContent = (props: IProps) => {
  const { flexClass, children, btnText } = props;

  const heroContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".hero-text, .hero-btn", {
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        y: 30,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: heroContainerRef },
  );

  return (
    <section
      ref={heroContainerRef}
      className={`w-full max-w-[600px] mx-auto pt-[140px] md:pt-[200px] pb-[26px] md:pb-[50px] px-[20px] md:px-0 ${flexClass ? "flex flex-col gap-[30px] md:gap-[60px] items-center" : ""}`}
    >
      <h1 className="hero-text font-quicksand tracking-tight text-medium-gray font-medium text-[36px] md:text-[42px] lg:text-[52px] text-center leading-[46px] md:leading-[52px] lg:leading-[66px]">
        {children}
      </h1>
      {btnText && (
        <div className="hero-btn">
          <Button link={"/contact"} btnTheme={"dark"}>
            {btnText}
          </Button>
        </div>
      )}
    </section>
  );
};

export default HeroContent;
