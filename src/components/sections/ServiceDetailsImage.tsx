interface IProps {
  imgSrc: string;
}

const ServiceDetailsImage = (props: IProps) => {
  const { imgSrc } = props;

  return (
    <figure>
      <img
        src={imgSrc}
        alt="service-section-image"
        width="1300"
        height="600"
        loading="lazy"
        className="h-[600px] w-full object-cover rounded-md"
      />
    </figure>
  );
};

export default ServiceDetailsImage;
