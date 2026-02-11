import { ImCross } from "react-icons/im";

const FaqSection = () => {
  return (
    <section className="custom-container py-[100px]">
      <div className="w-fit pb-[60px]">
        <h1 className="font-mohave text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          FAQ
        </h1>
      </div>
      <div className="flex flex-col gap-[30px]">

        <div className="flex gap-[60px] justify-between            border-b-1 border-b-light-gray pb-[30px]">
          <p className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[32px]">
            01.
          </p>
          <div className="space-y-[20px]">
            <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[32px]">
              What does CognitDev specialize in?
            </h2>
            <h3 className="font-quicksand font-medium text-[22px] text-medium-gray">
              CognitDev specializes in custom web applications, mobile app
              development, CMS & headless solutions, and UI/UX design for modern
              businesses.
            </h3>
          </div>
          <div>
            <ImCross className="text-[22px] transform rotate-45 transition-transform" />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FaqSection;
