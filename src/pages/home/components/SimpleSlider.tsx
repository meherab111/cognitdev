import { useState } from "react";
import testimonialsInfo from "../../../apis/home/testimonials/testimonialsInfo.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsFillChatSquareQuoteFill } from "react-icons/bs";
interface ITestimonialsInfo {
  userImg: string;
  userName: string;
  userPosition: string;
  comment: string;
}


const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const tsTestimonialsInfo: ITestimonialsInfo[] =
    testimonialsInfo as ITestimonialsInfo[];

  const nextSlide = () => {
    // If it's the last slide, go back to 0. Otherwise, add 1.
    setCurrentIndex((prev) => (prev === tsTestimonialsInfo.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    // If it's the first slide, go to the last one. Otherwise, minus 1.
    setCurrentIndex((prev) => (prev === 0 ? tsTestimonialsInfo.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg">
      
      {/* Wrapper for Slides */}
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {tsTestimonialsInfo.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-dark-gray flex flex-col gap-[60px] justify-center items-center rounded-md py-[60px] px-[90px] w-full min-w-[1280px]"
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

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full">
        <FaChevronLeft />
      </button>
      
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full">
        <FaChevronRight />
      </button>

     
    </div>
  );
};

export default SimpleSlider;