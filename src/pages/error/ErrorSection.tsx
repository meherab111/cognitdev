import Button from "../../components/shared/Button";

const ErrorSection = () => {
  return (
    <section className="custom-container pt-[200px] pb-[100px] flex flex-col items-center gap-[40px] md:gap-[60px]">
      <h1 className="text-[100px] sm:text-[200px] md:text-[240px] lg:text-[300px] text-dark-gray font-semibold font-mohave leading-none">
        404
      </h1>
      <h2 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[72px] text-dark-gray font-medium font-quicksand leading-[42px] md:leading-[66px] text-center">
        Something went wrong !!!
      </h2>
      <div>
        <Button btnTheme="dark" link={"/"}>
          Go Back
        </Button>
      </div>
    </section>
  );
};

export default ErrorSection;
