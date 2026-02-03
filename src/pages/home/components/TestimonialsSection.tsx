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
  const tsTestimonialsInfo = testimonialsInfo as ITestimonialsInfo[];

  return (
    <section className="custom-container py-[100px]">
      <div className="w-fit pb-[60px]">
        <h1 className="font-mohave text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          Testimonials
        </h1>
      </div>

      <div className="flex justify-center items-center relative">
        <div>
        <FaChevronLeft className="absolute top-[260px] left-[20px] text-smoke-white text-[42px] cursor-pointer" />

        <FaChevronRight className="absolute top-[260px] right-[20px] text-smoke-white text-[42px] cursor-pointer" />
        </div>

        {tsTestimonialsInfo.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-dark-gray flex flex-col gap-[60px] items-center rounded-md py-[60px] px-[90px]"
            >
              <BsFillChatSquareQuoteFill className="text-smoke-white text-[42px]" />
              <h1 className="text-smoke-white font-quicksand font-semibold text-[32px] leading-[42px] text-center">
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
