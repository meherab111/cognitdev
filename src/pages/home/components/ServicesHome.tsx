import Button from "../../../components/shared/Button";
import servicesInfo from "../../../apis/services/servicesInfo.json";
import { MdArrowOutward } from "react-icons/md";

interface IServicesInfo {
  serviceId: string;
  title: string;
  subtitle: string;
  titleImg: string;
}

const ServicesHome = () => {
  const tsServicesInfo = servicesInfo as IServicesInfo[];

  return (
    <section className="custom-container py-[100px]">
      <div className="flex justify-between pb-[42px]">
        <h1 className="font-mohave text-[42px] font-medium text-dark-gray border-b-2 border=b-dark-gray">
          Services
        </h1>
        <div>
          <Button link={"/services"}>View All Services</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[40px]">
        {tsServicesInfo.slice(0, 3).map((elem, idx) => {
          return (
            <div
              key={elem.serviceId}
              className={`flex gap-[30px] shadow-sm rounded-sm hover:shadow-md ${idx === 2 ? "col-span-2" : ""}`}
            >
              <div className="flex flex-col gap-[60px] justify-between p-[30px]">
                <div className="space-y-[16px]">
                  <h2 className="font-quicksand text-[30px] font-medium text-dark-gray leading-[42px]">
                    {elem.title}
                  </h2>
                  <h3 className="font-quicksand text-[20px] text-dark-gray">
                    {elem.subtitle}
                  </h3>
                </div>
                <div>
                  <Button link={`/services/${elem.serviceId}`}>
                    Explore More <MdArrowOutward />
                  </Button>
                </div>
              </div>
              <figure>
                <img
                  loading="lazy"
                  src={elem.titleImg}
                  alt={`${elem.title} Image`}
                  width="450"
                  height="450"
                  className="h-full w-[800px] object-cover rounded-sm"
                />
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesHome;
