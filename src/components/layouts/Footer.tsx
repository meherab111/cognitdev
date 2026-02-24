import { Link } from "react-router";
import followInfo from "../../apis/footer/followInfo";
import type { IFollowInfo } from "../../types/footer/typesFollow";
import Button from "../shared/Button";

const Footer = () => {
  return (
    <footer className="bg-dark-gray">
      <div className="custom-container flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[60px] pt-[30px] md:pt-[60px] pb-[30px]">
          <div className="w-fit">
            <Link to="/" aria-label="CognitDev Home">
              <span className="footer-logo text-smoke-white font-semibold font-quicksand text-[42px] md:text-[46px] xl:text-[56px] hover:text-light-gray">
                CognitDev
              </span>
            </Link>
          </div>

          <div className="w-full max-w-[600px]">
            <h2 className="text-smoke-white font-medium font-quicksand text-[22px] md:text-[26px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[46px]">
              Let's collaborate to transform your vision into a market leading
              business.
            </h2>
          </div>

          <nav>
            <ul className="flex flex-col min-[340px]:flex-row gap-[14px] sm:gap-[20px]">
              {followInfo.map((elem: IFollowInfo, idx: number) => {
                return (
                  <li key={idx}>
                    <a
                      href={elem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={elem.link}
                      className="text-smoke-white font-quicksand text-[18px] font-medium hover:text-light-gray border-b border-b-smoke-white hover:border-b-dark-gray"
                    >
                      {elem.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="block lg:hidden">
            <Button link={"/contact"} btnTheme={"light"}>
              Contact
            </Button>
          </div>

          <h3 className="text-light-gray font-quicksand font-medium text-[16px]">
            © 2026 <span className="text-smoke-white">CognitDev</span>. All
            Rights Reserved.
          </h3>
        </div>
        <div className="hidden lg:block">
          <Link to="/contact">
            <div className="contact-spin bg-smoke-white h-[150px] md:h-[180px] xl:h-[200px] w-[150px] md:w-[180px] xl:w-[200px] rounded-full flex justify-center items-center">
              <p className="text-dark-gray font-mohave font-semibold text-[28px] md:text-[32px] xl:text-[38px] uppercase">
                contact
              </p>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
