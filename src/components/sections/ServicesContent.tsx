import { useRef } from "react";
import servicesInfo from "../../apis/services/servicesInfo";
import Button from "../../components/shared/Button";
import type { IServicesInfo } from "../../types/services/typesServices";
import SectionHeadingText from "./SectionHeadingText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface IProps {
  slicedServicesLayout: boolean;
  btn?: boolean;
  colSpan?: boolean;
}

const ServicesContent = (props: IProps) => {
  const { slicedServicesLayout, btn, colSpan } = props;

  const servicesContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl: gsap.core.Timeline = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 0.8,
        },
        scrollTrigger: {
          trigger: servicesContainerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      tl.from(".section-header", {
        y: 70,
        ease: "power2.out",
      })
        .from(
          ".services-grid",
          {
            y: 80,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".services-text, .services-btn",
          {
            y: 30,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3",
        );
    },
    { scope: servicesContainerRef },
  );

  const slicedTsServicesInfo: IServicesInfo[] = servicesInfo.slice(0, 3);

  const displayTsServicesInfo: IServicesInfo[] = slicedServicesLayout
    ? slicedTsServicesInfo
    : servicesInfo;

  return (
    <section
      ref={servicesContainerRef}
      className="custom-container py-[50px] md:py-[100px]"
    >
      <div
        className={`section-header
          ${
            btn
              ? "flex items-center justify-between pb-[40px] md:pb-[60px]"
              : "w-fit pb-[40px] md:pb-[60px]"
          }
        `}
      >
        <SectionHeadingText text={"Services"} />

        {btn && (
          <div>
            <Button link={"/services"} btnTheme={"dark"}>
              View All Services
            </Button>
          </div>
        )}
      </div>

      <div className="services-grid grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[40px]">
        {displayTsServicesInfo.map((elem: IServicesInfo, idx: number) => {
          const colSpanClass: string =
            idx === 2 ? "col-span-1 lg:col-span-2" : "";

          return (
            <div
              key={elem.serviceId}
              className={`flex flex-col-reverse md:flex-row gap-[0] md:gap-[20px] shadow-sm rounded-md hover:shadow-lg ${colSpan ? colSpanClass : ""}`}
            >
              <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[60px] bg-smoke-white justify-between p-[16px] sm:p-[20px] md:p-[30px]">
                <div className="services-text space-y-[12px] md:space-y-[16px]">
                  <h2 className="font-quicksand text-[26px] md:text-[32px] font-semibold text-dark-gray leading-[30px] md:leading-[42px]">
                    {elem.title}
                  </h2>
                  <h3 className="font-quicksand font-medium text-[18px] md:text-[20px] text-medium-gray">
                    {elem.subtitle}
                  </h3>
                </div>
                <div className="services-btn">
                  <Button
                    link={`/services/${elem.serviceId}`}
                    btnTheme={"dark"}
                  >
                    Explore More
                  </Button>
                </div>
              </div>
              <figure className="overflow-hidden rounded-t-md md:rounded-tl-none md:rounded-r-md">
                <img
                  loading="lazy"
                  src={elem.titleImg}
                  alt={`${elem.title} Image`}
                  width="450"
                  height="450"
                  className="service-img h-[400px] md:h-full w-[800px] object-cover hover:scale-110"
                />
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesContent;
