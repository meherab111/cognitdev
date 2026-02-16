const LoaderSection = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-[60px] h-[60px] relative">
        <div className="loader-one border-[4px] border-medium-gray w-[56px] h-[56px] absolute border-l-transparent rounded-full"></div>
        <div className="loader-two border-[4px] border-dark-gray w-[40px] h-[40px] border-t-transparent border-r-transparent m-[8px] rounded-full"></div>
      </div>
    </section>
  );
};

export default LoaderSection;
