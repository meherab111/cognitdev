import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../components/shared/Button";
import ServiceDetailsImage from "../../components/sections/ServiceDetailsImage";
import { useParams } from "react-router";
import ErrorSection from "../error/ErrorSection";
import type {
  IOffers,
  IServiceDetailsInfo,
} from "../../types/services/typesServiceDetails";
import serviceDetailsInfo from "../../apis/services/serviceDetailsInfo";

interface IParams {
  [key: string]: string;
  serviceId: string;
}

const ServiceDetailsSection = () => {
  const { serviceId } = useParams<IParams>();

  const findServiceDetailsInfo: IServiceDetailsInfo | undefined =
    serviceDetailsInfo.find(
      (elem: IServiceDetailsInfo) => elem.serviceId === serviceId,
    );

  if (!findServiceDetailsInfo) {
    return <ErrorSection />;
  }

  const gridSectionClass: string =
    "grid grid-cols-1 xl:grid-cols-2 w-fit mx-auto py-[30px] xl:py-[40px] gap-[20px] md:gap-[30px] xl:gap-[40px]";

  const headingClass: string =
    "font-quicksand text-[26px] xl:text-[32px] font-semibold text-dark-gray leading-[36px] xl:leading-[42px]";

  return (
    <>
      <title>{`CognitDev | Services | ${findServiceDetailsInfo.serviceId}`}</title>

      <section className="custom-container pt-[140px] md:pt-[200px] pb-[50px] md:pb-[100px] space-y-[30px] md:space-y-[40px] xl:space-y-[60px]">
        <div className="w-full max-w-[600px] mx-auto">
          <h1 className="font-quicksand tracking-tight text-dark-gray font-medium text-[42px] md:text-[48px] xl:text-[52px] text-center leading-[52px] xl:leading-[66px] underline underline-offset-[14px]">
            {findServiceDetailsInfo.title}
          </h1>
        </div>

        <div className={gridSectionClass}>
          {findServiceDetailsInfo.choices.map((choice: string, idx: number) => {
            return (
              <div key={idx} className="flex gap-[10px]">
                <div className="pt-[6px]">
                  <IoMdCheckmarkCircleOutline className="text-[26px] xl:text-[32px]" />
                </div>
                <h2 className={headingClass}>{choice}</h2>
              </div>
            );
          })}
        </div>

        <ServiceDetailsImage imgSrc={findServiceDetailsInfo.srcImg[0]} />

        <div className={gridSectionClass}>
          {findServiceDetailsInfo.offers.map((offer: IOffers, idx: number) => {
            return (
              <div key={idx} className="flex gap-[16px] xl:gap-[20px]">
                <p className={headingClass}>{offer.number}</p>

                <div className="space-y-[10px]">
                  <h2 className={headingClass}>{offer.heading}</h2>
                  <h3 className="font-quicksand font-medium text-[18px] md:text-[20px] text-medium-gray">
                    {offer.description}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <ServiceDetailsImage imgSrc={findServiceDetailsInfo.srcImg[1]} />

        <div className="flex justify-center">
          <Button link={"/services"} btnTheme={"dark"}>
            View All Services
          </Button>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsSection;
