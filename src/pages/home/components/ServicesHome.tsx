import Button from "../../../components/shared/Button";
// import servicesInfo from "../../apis/services/servicesInfo.json";

// interface IServicesInfo {
//   serviceId: string;
//   title: string;
//   subtitle: string;
//   titleImg: string;
// }

const ServicesHome = () => {
  // const tsServicesInfo = servicesInfo as IServicesInfo[];

  return (
    <section className="min-h-screen custom-container py-[100px]">
      <div className="flex justify-between pb-[42px]">
        <h1 className="font-mohave text-[36px] font-medium text-dark-gray border-b-2 border=b-dark-gray">
          Services
        </h1>

        <Button link={"/services"}>View All Services</Button>
      </div>

      <div className="flex flex-col gap-[30px]">
        <div className="flex gap-[30px]">
          <div className="flex gap-[30px] shadow-sm rounded-sm">
            <div className="flex flex-col gap-[60px] justify-between p-[30px]">
              <div className="space-y-[20px]">
                <h2 className="font-quicksand text-[32px] font-medium text-dark-gray leading-[42px]">
                  CMS & Headless Dev
                </h2>
                <h3 className="font-quicksand text-[22px] text-dark-gray">
                  Fast, flexible content systems built for growth. We handle the
                  tech so you can manage your content with total ease.
                </h3>
              </div>
              <div>
                <Button link={"/services/"}>Explore More</Button>
              </div>
            </div>
            <figure>
              <img
                src="/images/services/service-01/cms-dev.webp"
                alt="CMS Img "
                className="h-full w-[800px] object-cover rounded-sm"
              />
            </figure>
          </div>
          <div className="flex gap-[30px] shadow-sm rounded-sm">
            <div className="flex flex-col gap-[60px] justify-between p-[30px]">
              <div className="space-y-[20px]">
                <h2 className="font-quicksand text-[32px] font-medium text-dark-gray leading-[42px]">
                  Custom Web App Dev
                </h2>
                <h3 className="font-quicksand text-[22px] text-dark-gray">
                  We build custom, secure, and responsive web apps from
                  dashboards to booking systems backend by full end to end
                  support.
                </h3>
              </div>
              <div>
                <Button link={"/services/"}>Explore More</Button>
              </div>
            </div>
            <figure>
              <img
                src="/images/services/service-02/custom-dev.webp"
                alt="xyz"
                className="h-full w-[800px] object-cover rounded-sm"
              />
            </figure>
          </div>
        </div>
        <div className="flex gap-[30px] shadow-sm rounded-sm">
          <div className="flex flex-col gap-[60px] justify-between p-[30px]">
            <div className="space-y-[20px]">
              <h2 className="font-quicksand text-[32px] font-medium text-dark-gray leading-[42px]">
                Mobile App Dev
              </h2>
              <h3 className="font-quicksand text-[22px] text-dark-gray">
                Scalable mobile and cross-platform apps. Smooth user experiences
                tailored for startups, service businesses, and local brands.
              </h3>
            </div>
            <div>
              <Button link={"/services/"}>Explore More</Button>
            </div>
          </div>
          <figure>
            <img
              src="/images/services/service-03/mobile-dev.webp"
              alt="xyyx"
              className="h-full w-[800px] object-cover rounded-sm"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
