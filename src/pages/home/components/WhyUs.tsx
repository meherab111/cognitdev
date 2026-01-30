import whyUsInfo from "../../../apis/why-us/whyUsInfo.json";

interface IWhyUsInfo {
  number: string;
  title: string;
  description: string;
}

const WhyUs = () => {
  const tsWhyUsInfo = whyUsInfo as IWhyUsInfo[];

  return (
    <section className="custom-container flex flex-col items-start gap-[30px] md:gap-[130px] py-[100px] relative">
      <div className="flex flex-col md:sticky top-[100px]">
        <h1 className="font-mohave text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          Why Cognitdev
        </h1>
      </div>
      <div className="max-w-[600px]">
        {tsWhyUsInfo.map((elem) => {
          return (
            <div key={elem.number}>
              <h1 className="text-dark-gray font-quicksand font-semibold text-[62px] leading-none">
                {elem.number}
              </h1>
              <h2 className="text-dark-gray font-quicksand text-[26px] font-semibold">
                {elem.title}
              </h2>
              <p className="text-dark-gray font-quicksand text-[20px] font-medium">
                {elem.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
