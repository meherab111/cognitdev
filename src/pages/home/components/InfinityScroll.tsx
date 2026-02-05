import infinityScrollInfo from "../../../apis/sections/infinity-scroll/infinityScrollInfo.json";

interface IInfinityScrollInfo {
  services: string[];
  direction: string;
}

const InfinityScroll = () => {
  const tsInfinityScrollInfo: IInfinityScrollInfo[] =
    infinityScrollInfo as IInfinityScrollInfo[];
  return (
    <section className="overflow-hidden py-[100px]">
      {tsInfinityScrollInfo.map((elem, idx) => {
        return (
          <div key={idx} className="flex whitespace-nowrap w-max">
            {[0, 1].map((_, valIdx) => {
              return (
                <div
                  key={valIdx}
                  className={`flex ${elem.direction === "left" ? "animate-scroll-left" : "animate-scroll-right"} `}
                >
                  {elem.services.map((services, servicesIdx) => (
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
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default InfinityScroll;
