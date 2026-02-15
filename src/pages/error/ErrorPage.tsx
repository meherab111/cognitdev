import Button from "../../components/shared/Button";

const ErrorPage = () => {
  return (
    <section className="custom-container pt-[200px] pb-[100px] flex flex-col items-center gap-[60px]">
      <h1 className="text-[300px] text-dark-gray font-semibold font-mohave leading-none">
        404
      </h1>
      <h2 className="text-[72px] text-dark-gray font-medium font-quicksand leading-[66px]">
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

export default ErrorPage;
