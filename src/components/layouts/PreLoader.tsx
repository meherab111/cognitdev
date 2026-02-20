const PreLoader = () => {
  return (
    <section className="fixed inset-0 z-100 flex items-center justify-center gap-[16px] h-full w-full bg-smoke-white">
      <figure className="visible">
        <img
          src="/images/logo/cognitdev-logo.webp"
          alt="CognitDev Logo"
          width="90"
          height="90"
          className="h-auto w-[90px] object-contain"
        />
      </figure>

      <div className="visible">
        <h1 className="font-quicksand tracking-tight text-dark-gray font-semibold text-[90px] leading-none">
          CognitDev
        </h1>
      </div>
    </section>
  );
};

export default PreLoader;
