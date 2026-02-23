import servicesInfo from "../../apis/services/servicesInfo";
import Button from "../../components/shared/Button";
import type { IServicesInfo } from "../../types/services/typesServices";

interface IProps {
  slicedServicesLayout: boolean;
  btn?: boolean;
  colSpan?: boolean;
}

const ServicesContent = (props: IProps) => {
  const { slicedServicesLayout, btn, colSpan } = props;

  const slicedTsServicesInfo: IServicesInfo[] = servicesInfo.slice(0, 3);

  const displayTsServicesInfo: IServicesInfo[] = slicedServicesLayout
    ? slicedTsServicesInfo
    : servicesInfo;

  return (
    <section className="custom-container py-[100px]">
      <div
        className={
          btn
            ? "flex items-center justify-between pb-[60px]"
            : "w-fit pb-[60px]"
        }
      >
        <h1 className="font-mohave text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
          Services
        </h1>

        {btn && (
          <div>
            <Button link={"/services"} btnTheme={"dark"}>
              View All Services
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[40px]">
        {displayTsServicesInfo.map((elem: IServicesInfo, idx: number) => {
          const colSpanClass: string =
            idx === 2 ? "col-span-1 lg:col-span-2" : "";

          return (
            <div
              key={elem.serviceId}
              className={`service-card flex flex-col-reverse sm:flex-row gap-[12px] md:gap-[20px] shadow-sm rounded-md hover:shadow-lg ${colSpan ? colSpanClass : ""}`}
            >
              <div className="flex flex-col gap-[20px] sm:gap-[30px] md:gap-[60px] justify-between p-[12px] sm:p-[20px] md:p-[30px]">
                <div className="space-y-[16px]">
                  <h2 className="font-quicksand text-[26px] md:text-[32px] font-semibold text-dark-gray leading-[30px] md:leading-[42px]">
                    {elem.title}
                  </h2>
                  <h3 className="font-quicksand font-medium text-[18px] md:text-[20px] text-medium-gray">
                    {elem.subtitle}
                  </h3>
                </div>
                <div>
                  <Button
                    link={`/services/${elem.serviceId}`}
                    btnTheme={"dark"}
                  >
                    Explore More
                  </Button>
                </div>
              </div>
              <figure className="overflow-hidden rounded-r-md">
                <img
                  loading="lazy"
                  src={elem.titleImg}
                  alt={`${elem.title} Image`}
                  width="450"
                  height="450"
                  className="service-img h-full w-[800px] object-cover hover:scale-110"
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
