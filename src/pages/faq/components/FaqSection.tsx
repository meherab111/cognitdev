import { useState } from "react";
import { ImCross } from "react-icons/im";
import faqInfo from "../../../apis/faq/faqInfo";
import type { IFaqInfo } from "../../../types/faq/typesFaq";

const FaqSection = () => {
  const [toggle, setToggle] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    setToggle(toggle === index ? null : index);
  };

  const questionClass: string =
    "font-quicksand text-[26px] lg:text-[32px] font-semibold text-dark-gray leading-[32px]";

  return (
    <section className="custom-container py-[50px] md:py-[100px]">
      <div className="w-fit pb-[30px] md:pb-[60px]">
        <h1 className="font-mohave text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          FAQ
        </h1>
      </div>
      <div className="flex flex-col gap-[20px] md:gap-[30px] lg:gap-[40px]">
        {faqInfo.map((elem: IFaqInfo, idx: number) => {
          return (
            <div
              key={elem.number}
              onClick={() => handleToggle(idx)}
              className="flex gap-[30px] md:gap-[40px] lg:gap-[60px] justify-between border-b-1 border-b-light-gray/30 pb-[20px] md:pb-[40px] cursor-pointer"
            >
              <div className="flex gap-[16px] md:gap-[30px]">
                <p className={questionClass}>{elem.number}</p>

                <div className="space-y-[14px] md:space-y-[20px]">
                  <h2 className={questionClass}>{elem.question}</h2>
                  {idx === toggle && (
                    <h3 className="font-quicksand font-medium text-[20px] md:text-[22px] text-medium-gray">
                      {elem.answer}
                    </h3>
                  )}
                </div>
              </div>

              <div className="pt-[6px] md:pt-0">
                <ImCross
                  className={`text-[20px] md:text-[22px] faq-icon ${idx === toggle ? "rotate-90" : "rotate-45"}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
