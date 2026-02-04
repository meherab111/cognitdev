import whyUsInfo from "../../../apis/home/why-us-section/whyUsInfo.json";
import Button from "../../../components/shared/Button";

interface IWhyUsInfo {
  number: string;
  title: string;
  description: string;
}

const WhyUsSection = () => {
  const tsWhyUsInfo: IWhyUsInfo[] = whyUsInfo as IWhyUsInfo[];

  return (
    <section className="custom-container py-[100px]">
      <div className="flex items-center justify-between pb-[60px]">
        <h1 className="font-mohave text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          Why CognitDev
        </h1>
        <div>
          <Button link={"/contact"} btnTheme={"dark"}>
            Get Started
          </Button>
        </div>
      </div>

      <div className="flex gap-[100px]">
        {tsWhyUsInfo.map((elem) => {
          return (
            <div key={elem.number} className="space-y-[30px]">
              <h1 className="text-dark-gray font-quicksand font-semibold text-[130px] leading-none tracking-[-6px]">
                {elem.number}
              </h1>
              <h2 className="text-dark-gray font-quicksand text-[42px] font-semibold">
                {elem.title}
              </h2>
              <p className="text-light-gray font-quicksand text-[20px] font-medium">
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
