import Button from "../../components/shared/Button";

const CtaSection = () => {
  return (
    <section className="py-[100px]">
      <div className="custom-container bg-dark-gray flex justify-between items-center rounded-md !px-0">
        <div className="flex flex-col gap-[40px] w-full max-w-[700px] pl-[60px]">
          <h1 className="font-quicksand text-[36px] font-semibold text-smoke-white leading-[46px]">
            Let's Build Software That Works for Your Business Growth
          </h1>
          <h2 className="font-quicksand font-medium text-[20px] text-light-gray">
            Have an idea, a product plan, or a technical challenge? We're here
            to help you design and build the right solution.
          </h2>

          <div>
            <Button link={"/contact"} btnTheme={"light"}>
              Start a Conversation
            </Button>
          </div>
        </div>
        <figure>
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
