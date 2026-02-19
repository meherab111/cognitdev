import React from "react";
import experienceInfo from "../../../apis/home/experience-section/experienceInfo";
import type { IExperienceInfo } from "../../../types/home/experience-section/typesExperience";

const ExperienceSection = () => {
  const borderLength: number = experienceInfo.length - 1;

  return (
    <section className="py-[100px]">
      <div className="custom-container bg-dark-gray flex justify-around gap-[60px] rounded-md py-[60px]">
        {experienceInfo.map((elem: IExperienceInfo, idx: number) => (
          <React.Fragment key={idx}>
            <div className="experience-box space-y-[20px] cursor-pointer hover:-translate-y-2">
              <h1 className="font-quicksand font-semibold text-center text-[96px] text-smoke-white leading-none">
                {elem.stat}
              </h1>
              <h2 className="font-quicksand text-center font-medium text-[20px] text-light-gray">
                {elem.label}
              </h2>
            </div>

            {idx < borderLength && (
              <div className="border-r-1 border-light-gray"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;