interface IProps {
  imgSrc: string;
  imgSize: "large" | "small";
  width: "800" | "500";
  height: "550" | "400";
}

const AboutImage = (props: IProps) => {
  const { imgSrc, imgSize, width, height } = props;

  imgSize === "large" ? "max-w-[800px]" : "max-w-[500px]";

  return (
    <figure>
      <img
        src={imgSrc}
        alt="About Images"
        width={width}
        height={height}
        loading="lazy"
        className={`h-auto w-full ${imgSize} object-cover rounded-md`}
      />
    </figure>
  );
};

export default AboutImage;
