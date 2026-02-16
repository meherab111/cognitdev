import type { ReactNode } from "react";
import Button from "../../components/shared/Button";

interface IProps {
  flexClass?: string;
  children: ReactNode;
  btnText?: string;
}

const HeroContent = (props: IProps) => {
  const { flexClass, children, btnText } = props;

  return (
    <section
      className={`w-full max-w-[600px] mx-auto pt-[200px] pb-[50px] ${flexClass}`}
    >
      {children}

      {btnText && (
        <div className="none">
          <Button link={"/contact"} btnTheme={"dark"}>
            {btnText}
          </Button>
        </div>
      )}
    </section>
  );
};

export default HeroContent;
