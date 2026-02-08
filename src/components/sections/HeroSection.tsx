import type { ReactNode } from "react";
import Button from "../../components/shared/Button";

interface IProps {
  imgUrl: string;
  headingText: string;
  headingChildren: ReactNode;
  btnText: string;
}

const HeroSection = (props: IProps) => {
  const { imgUrl, headingText, headingChildren, btnText } = props;

  return (
    <section className="custom-container pt-[200px] pb-[100px] flex gap-[30px] items-center">
      <figure>
        <img
          src={imgUrl}
          alt="Hero Background Image"
          width="700"
          height="550"
          loading="eager"
          className="h-[550px] w-[700px] object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col gap-[60px]">
        <div>
          <h1 className="font-quicksand tracking-tight text-dark-gray font-semibold text-[90px]">
            {headingText}
          </h1>
          <h2 className="font-quicksand tracking-tight text-medium-gray font-medium text-[52px]">
            {headingChildren}
          </h2>
        </div>

        <div>
          <Button link={"/contact"} btnTheme={"dark"}>
            {btnText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
