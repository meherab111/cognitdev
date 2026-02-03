import React from "react";
import experienceInfo from "../../../apis/home/experience-section/experienceInfo.json";

interface IExperienceInfo {
  stat: string;
  label: string;
}

const ExperienceSection = () => {
  const tsExperienceInfo = experienceInfo as IExperienceInfo[];

  const borderLength: number = tsExperienceInfo.length - 1;

  return (
    <section className="custom-container flex justify-around gap-[60px] py-[100px]">
      {tsExperienceInfo.map((elem, idx) => (
        <React.Fragment key={idx}>
          <div className="experience-box space-y-[20px] cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2">
            <h1 className="font-quicksand font-semibold text-center text-[96px] text-dark-gray leading-none">
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
    </section>
  );
};

export default ExperienceSection;
