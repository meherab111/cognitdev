import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import servicesInfo from "../../../apis/services/servicesInfo";
import type { IServicesInfo } from "../../../types/services/typesServices";

const AboutInfoSection = () => {
  return (
    <section className="custom-container py-[100px] relative flex justify-between">
      <div className="sticky top-[100px] h-fit">
        <h1 className="font-mohave text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          About CognitDev
        </h1>
      </div>

      <div className="w-full max-w-[700px] space-y-[40px]">
        <h2 className="text-dark-gray font-quicksand text-[32px] font-semibold">
          We're a forward thinking software development company focused on
          building reliable, scalable, and intelligent digital solutions.
        </h2>
        <h3 className="text-medium-gray font-quicksand text-[22px] font-medium">
          At the core of CognitDev is collaboration. We don't see our clients as
          just stakeholders. We treat them as partners in the digital product
          journey. Your ideas, insights, and business knowledge play a vital
          role in shaping the final result. <br /> By combining your vision with
          our technical expertise, we create software that is not only
          functional, but meaningful, future ready, and aligned with your
          business goals. <br />
          This collaborative approach helps us deliver products that truly
          reflect your brand values while solving real world problems through
          clean architecture and thoughtful engineering.
        </h3>

        <div className="space-y-[10px]">
          {servicesInfo.map((elem: IServicesInfo) => {
            return (
              <div className="flex items-center gap-[10px]">
                <IoMdCheckmarkCircleOutline className="text-[22px]" />
                <p
                  key={elem.serviceId}
                  className="text-medium-gray font-quicksand text-[22px] font-semibold"
                >
                  {elem.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutInfoSection;
