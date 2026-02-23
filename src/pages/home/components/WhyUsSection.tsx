import whyUsInfo from "../../../apis/home/why-us-section/whyUsInfo";
import Button from "../../../components/shared/Button";
import type { IWhyUsInfo } from "../../../types/home/why-us-section/typesWhyUs";

const WhyUsSection = () => {
  return (
    <section className="custom-container py-[50px] md:py-[100px]">
      <div className="flex items-center justify-between pb-[30px] md:pb-[60px]">
        <h1 className="font-mohave text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          Why
          <span className="hidden sm:inline"> CognitDev</span>
          <span className="inline sm:hidden"> Us</span>
        </h1>
        <div>
          <Button link={"/contact"} btnTheme={"dark"}>
            Get Started
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[60px] lg:gap-[100px]">
        {whyUsInfo.map((elem: IWhyUsInfo) => {
          return (
            <div
              key={elem.number}
              className="space-y-[12px] md:space-y-[20px] lg:space-y-[30px]"
            >
              <h1 className="text-dark-gray font-quicksand font-semibold text-[72px] md:text-[100px] lg:text-[130px] leading-none tracking-0 lg:tracking-[-6px]">
                {elem.number}
              </h1>
              <h2 className="text-dark-gray font-quicksand text-[28px] md:text-[36px] lg:text-[42px] font-semibold">
                {elem.title}
              </h2>
              <p className="text-medium-gray font-quicksand text-[18px] md:text-[20px] font-medium">
                {elem.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUsSection;
