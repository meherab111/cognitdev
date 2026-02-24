import Button from "../../components/shared/Button";

const CtaSection = () => {
  return (
    <section className="py-[50px] md:py-[100px] px-[20px] md:px-0">
      <div className="custom-container bg-dark-gray flex justify-center xl:justify-between items-center rounded-md !px-0">
        <div className="flex flex-col items-center xl:items-start gap-[30px] xl:gap-[40px] w-full max-w-[700px] p-[30px] xl:pl-[60px] xl:pr-0 xl:py-0">
          <h1 className="font-quicksand text-[28px] md:text-[32px] xl:text-[36px] font-semibold text-smoke-white leading-[36px] md:leading-[46px] text-center xl:text-left">
            Let's Build Software That Works for Your Business Growth
          </h1>
          <h2 className="font-quicksand font-medium text-[18px] md:text-[20px] text-light-gray text-center xl:text-left">
            Have an idea, a product plan, or a technical challenge? We're here
            to help you design and build the right solution.
          </h2>

          <div>
            <Button link={"/contact"} btnTheme={"light"}>
              Start a Conversation
            </Button>
          </div>
        </div>
        <figure className="hidden xl:block">
          <img
            src="/images/home/cta-section/cta-image.webp"
            alt="CTA Section Image"
            loading="lazy"
            width="550"
            height="400"
            className="h-auto w-full max-w-[550px] object-cover rounded-r-md"
          />
        </figure>
      </div>
    </section>
  );
};

export default CtaSection;
