interface IProps {
  imgSrc: string;
}

const AboutImage = (props: IProps) => {
  const { imgSrc } = props;

  return (
    <figure>
      <img
        src={imgSrc}
        alt="About Image One"
        width="800"
        height="550"
        loading="lazy"
        className="h-auto w-full max-w-[800px] object-cover rounded-md"
      />
    </figure>
  );
};

export default AboutImage;
