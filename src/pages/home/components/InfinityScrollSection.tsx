import infinityScrollInfo from "../../../apis/home/infinity-scroll-section/infinityScrollInfo";
import type { IInfinityScrollInfo } from "../../../types/home/infinity-scroll-section/typesInfinityScroll";

const InfinityScrollSection = () => {
  return (
    <section className="overflow-hidden py-[100px]">
      {infinityScrollInfo.map((elem: IInfinityScrollInfo, idx: number) => {
        return (
          <div key={idx} className="flex whitespace-nowrap w-max">
            {[0, 1].map((_: number, valIdx: number) => {
              return (
                <div
                  key={valIdx}
                  className={`flex ${elem.direction === "left" ? "animate-scroll-left" : "animate-scroll-right"} `}
                >
                  {elem.services.map(
                    (services: string, servicesIdx: number) => (
                      <p
                        key={servicesIdx}
                        className="flex items-center text-[110px] md:text-[120px] font-mohave font-medium uppercase pl-[24px] leading-none text-light-gray"
                      >
                        <span
                          className={
                            servicesIdx % 2 === 0
                              ? "text-light-gray"
                              : "text-dark-gray"
                          }
                        >
                          {services}
                        </span>

                        <span className="text-[70px] md:text-[74px] ml-[24px]">
                          -
                        </span>
                      </p>
                    ),
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default InfinityScrollSection;
