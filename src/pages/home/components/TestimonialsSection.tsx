import { useState } from "react";
import testimonialsInfo from "../../../apis/home/testimonials/testimonialsInfo.json";

import { BsFillChatSquareQuoteFill } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ITestimonialsInfo {
  userImg: string;
  userName: string;
  userPosition: string;
  comment: string;
}

const TestimonialsSection = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  const tsTestimonialsInfo: ITestimonialsInfo[] =
    testimonialsInfo as ITestimonialsInfo[];

  const chevronClass: string = "text-dark-gray text-[32px] cursor-pointer";

  const handleLeftClick = () => {
    let lastElement: number = tsTestimonialsInfo.length - 1;

    setCurrentIdx((prev: number): number => {
      return prev === 0 ? lastElement : prev - 1;
    });
  };

  const handleRightClick = () => {
    let lastElement: number = tsTestimonialsInfo.length - 1;

    setCurrentIdx((prev: number): number => {
      return prev === lastElement ? 0 : prev + 1;
    });
  };

  return (
    <section className="custom-container py-[100px]">
      <div className=" pb-[60px] flex justify-between items-center">
        <h1 className="font-mohave text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          Testimonials
        </h1>

        <div className="space-x-[40px]">
          <button onClick={handleLeftClick}>
            <FaChevronLeft className={`left-[20px] ${chevronClass}`} />
          </button>
          <button onClick={handleRightClick}>
            <FaChevronRight className={`right-[20px] ${chevronClass}`} />
          </button>
        </div>
      </div>

      <div className="bg-dark-gray flex justify-start rounded-md overflow-x-hidden">
        {tsTestimonialsInfo.map((elem, idx) => {
          return (
            <div
              key={idx}
              className={`flex flex-col gap-[60px] items-center p-[60px] min-w-full testimonial-card -translate-x-[${currentIdx * 100}%]`}
            >
              <BsFillChatSquareQuoteFill className="text-smoke-white text-[42px]" />
              <h1 className="text-smoke-white font-quicksand font-semibold text-[32px] leading-[42px] text-center w-full max-w-[840px]">
                {elem.comment}
              </h1>

              <div className="flex gap-[20px] items-center">
                <figure>
                  <img
                    src={elem.userImg}
                    alt="User Image"
                    className="h-[70px] w-[70px] rounded-full object-cover"
                  />
                </figure>
                <div>
                  <h2 className="text-smoke-white font-quicksand text-[24px] font-semibold">
                    {elem.userName}
                  </h2>
                  <h3 className="text-light-gray font-quicksand text-[20px] font-semibold">
                    {elem.userPosition}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
