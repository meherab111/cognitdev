interface IProps {
  imgSrc: string;
  imgClass: string
}

const ServiceDetailsImage = (props: IProps) => {
  const { imgSrc, imgClass } = props;

  return (
    <figure className={imgClass}>
      <img
        src={imgSrc}
        alt="service-section-image"
        width="1300"
        height="600"
        loading="lazy"
        className="h-[400px] md:h-[500px] xl:h-[600px] w-full object-cover rounded-md"
      />
    </figure>
  );
};

export default ServiceDetailsImage;
