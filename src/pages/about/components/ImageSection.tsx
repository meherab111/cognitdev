import AboutImage from "../../../components/sections/AboutImage";

const ImageSection = () => {
  return (
    <section className="custom-container py-[100px] flex gap-[40px] items-center">
      <AboutImage
        imgSrc={"/images/about/image-section/about-image-01.webp"}
        imgSize={"large"}
        width={"800"}
        height={"550"}
      />
      <div className="space-y-[40px]">
        <AboutImage
          imgSrc={"/images/about/image-section/about-image-02.webp"}
          imgSize={"small"}
          width={"500"}
          height={"400"}
        />
        <div className="bg-dark-gray h-fit w-fit p-[60px] space-y-[20px] rounded-md">
          <h1 className="font-quicksand font-semibold text-center text-[96px] text-smoke-white leading-none">
            7+
          </h1>
          <h2 className="font-quicksand text-center font-medium text-[20px] text-light-gray">
            Years of Experience
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
