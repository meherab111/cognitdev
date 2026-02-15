import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../components/shared/Button";
import serviceDetailsInfo from "../../apis/sections/services-section/serviceDetailsInfo.json";
import ServiceDetailsImage from "../../components/sections/ServiceDetailsImage";
import { useParams } from "react-router";
import ErrorPage from "../error/ErrorPage";

interface IParams {
  [key: string]: string;
  serviceId: string;
}

interface IOffers {
  number: string;
  heading: string;
  description: string;
}

interface IServiceDetailsInfo {
  serviceId: string;
  title: string;
  choices: string[];
  srcImg: string[];
  offers: IOffers[];
}

const ServiceDetailsSection = () => {
  const { serviceId } = useParams<IParams>();

  const tsServiceDetailsInfo: IServiceDetailsInfo[] =
    serviceDetailsInfo as IServiceDetailsInfo[];

  const findServiceDetailsInfo = tsServiceDetailsInfo.find(
    (elem) => elem.serviceId === serviceId,
  );

  if (!findServiceDetailsInfo) {
    return <ErrorPage />;
  }

  return (
    <section className="custom-container pt-[200px] pb-[100px] space-y-[60px]">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="font-quicksand tracking-tight text-dark-gray font-medium text-[52px] text-center leading-[66px]">
          {findServiceDetailsInfo.title}
        </h1>
      </div>

      <div className="grid grid-cols-2 w-fit mx-auto py-[40px] gap-[40px]">
        {findServiceDetailsInfo.choices.map((choice, idx) => {
          return (
            <div key={idx} className="flex items-center gap-[10px]">
              <IoMdCheckmarkCircleOutline className="text-[32px]" />
              <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
                {choice}
              </h2>
            </div>
          );
        })}
      </div>

      <ServiceDetailsImage imgSrc={findServiceDetailsInfo.srcImg[0]} />

      <div className="grid grid-cols-2 w-fit mx-auto py-[40px] gap-[40px]">
        {findServiceDetailsInfo.offers.map((offer, idx) => {
          return (
            <div key={idx} className="flex gap-[20px]">
              <p className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
                {offer.number}
              </p>

              <div className="space-y-[10px]">
                <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
                  {offer.heading}
                </h2>
                <h3 className="font-quicksand font-medium text-[20px] text-medium-gray">
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
  );
};

export default ServiceDetailsSection;
