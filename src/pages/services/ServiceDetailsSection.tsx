import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from "../../components/shared/Button";


const ServiceDetailsSection = () => {
  return (
    <section className="custom-container pt-[200px] pb-[100px] space-y-[60px]">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="font-quicksand tracking-tight text-dark-gray font-medium text-[52px] text-center leading-[66px]">
          Cloud Solutions & DevOps
        </h1>
      </div>

      <div className="grid grid-cols-2 w-fit mx-auto py-[40px] gap-[40px]">
        <div className="flex items-center gap-[10px]">
          <IoMdCheckmarkCircleOutline className="text-[32px]" />
          <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            Zero Downtime Mentality
          </h2>
        </div>

        <div className="flex items-center gap-[10px]">
          <IoMdCheckmarkCircleOutline className="text-[32px]" />
          <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            Security First Culture
          </h2>
        </div>

        <div className="flex items-center gap-[10px]">
          <IoMdCheckmarkCircleOutline className="text-[32px]" />
          <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            Cost Efficient Scaling
          </h2>
        </div>

        <div className="flex items-center gap-[10px]">
          <IoMdCheckmarkCircleOutline className="text-[32px]" />
          <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            Faster Release Cycle
          </h2>
        </div>
      </div>

      <figure>
        <img
          src="/images/sections/services-section/service-05/cloud-img-01.webp"
          alt="service-section"
          className="h-[600px] w-full object-cover rounded-md"
        />
      </figure>

      <div className="grid grid-cols-2 w-fit mx-auto py-[40px] gap-[40px]">
        <div className="flex gap-[20px]">
          <p className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            01.
          </p>

          <div className="space-y-[10px]">
            <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
              Automated CI/CD Pipelines
            </h2>
            <h3 className="font-quicksand font-medium text-[20px] text-medium-gray">
              We eliminate manual errors by automating your build, test, and
              deployment processes. This ensures that every code update is
              safely and consistently pushed to production without disrupting
              your existing users.
            </h3>
          </div>
        </div>

        <div className="flex gap-[20px]">
          <p className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            01.
          </p>

          <div className="space-y-[10px]">
            <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
              Automated CI/CD Pipelines
            </h2>
            <h3 className="font-quicksand font-medium text-[20px] text-medium-gray">
              We eliminate manual errors by automating your build, test, and
              deployment processes. This ensures that every code update is
              safely and consistently pushed to production without disrupting
              your existing users.
            </h3>
          </div>
        </div>

        <div className="flex gap-[20px]">
          <p className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            01.
          </p>

          <div className="space-y-[10px]">
            <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
              Automated CI/CD Pipelines
            </h2>
            <h3 className="font-quicksand font-medium text-[20px] text-medium-gray">
              We eliminate manual errors by automating your build, test, and
              deployment processes. This ensures that every code update is
              safely and consistently pushed to production without disrupting
              your existing users.
            </h3>
          </div>
        </div>

        <div className="flex gap-[20px]">
          <p className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
            01.
          </p>

          <div className="space-y-[10px]">
            <h2 className="font-quicksand text-[32px] font-semibold text-dark-gray leading-[42px]">
              Automated CI/CD Pipelines
            </h2>
            <h3 className="font-quicksand font-medium text-[20px] text-medium-gray">
              We eliminate manual errors by automating your build, test, and
              deployment processes. This ensures that every code update is
              safely and consistently pushed to production without disrupting
              your existing users.
            </h3>
          </div>
        </div>
      </div>

      <figure>
        <img
          src="/images/sections/services-section/service-05/cloud-img-02.webp"
          alt="service-section"
          className="h-[600px] w-full object-cover rounded-md"
        />
      </figure>
      <div className="flex justify-center">
        <Button link={"/contact"} btnTheme={"dark"}>
          View All Services
        </Button>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
