import AboutImage from "../../../components/sections/AboutImage";

const ImageSection = () => {
  return (
    <section className="custom-container py-[50px] md:py-[100px] flex gap-[20px] md:gap-[40px] flex-col md:flex-row items-center">
      <AboutImage
        imgSrc={"/images/about/image-section/about-image-01.webp"}
        imgSize={"large"}
        width={"800"}
        height={"550"}
      />
      <div className="space-y-[20px] md:space-y-[40px]">
        <AboutImage
          imgSrc={"/images/about/image-section/about-image-02.webp"}
          imgSize={"small"}
          width={"500"}
          height={"400"}
        />
        <div className="bg-dark-gray h-fit w-full md:w-fit p-[42px] md:p-[50px] lg:p-[60px] space-y-[20px] rounded-md">
          <h1 className="font-quicksand font-semibold text-center text-[62px] md:text-[76px] lg:text-[96px] text-smoke-white leading-none">
            7+
          </h1>
          <h2 className="font-quicksand text-center font-medium text-[18px] md:text-[20px] text-light-gray">
            Years of Experience
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
