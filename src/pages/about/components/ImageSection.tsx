const ImageSection = () => {
  return (
    <section className="custom-container py-[100px] flex gap-[40px] items-center">
      <figure>
        <img
          src="/images/about/image-section/about-image-01.webp"
          alt="About Image One"
          width="800"
          height="550"
          loading="lazy"
          className="h-auto w-full max-w-[800px] object-cover rounded-md"
        />
      </figure>

      <div className="space-y-[40px]">
        <figure>
          <img
            src="/images/about/image-section/about-image-02.webp"
            alt="About Image Two"
            width="500"
            height="400"
            loading="lazy"
            className="h-auto w-full max-w-[500px] object-cover rounded-md"
          />
        </figure>

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
