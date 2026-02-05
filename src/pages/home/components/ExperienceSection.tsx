import React from "react";
import experienceInfo from "../../../apis/home/experience-section/experienceInfo.json";

interface IExperienceInfo {
  stat: string;
  label: string;
}

const ExperienceSection = () => {
  const tsExperienceInfo: IExperienceInfo[] =
    experienceInfo as IExperienceInfo[];

  const borderLength: number = tsExperienceInfo.length - 1;

  return (
    <section className="py-[100px]">
      <div className="custom-container bg-dark-gray flex justify-around gap-[60px] rounded-md py-[60px]">
        {tsExperienceInfo.map((elem, idx) => (
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
