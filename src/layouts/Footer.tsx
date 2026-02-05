import { Link } from "react-router";
import followInfo from "../apis/footer/followInfo.json";

interface IFollowInfo {
  text: string;
  link: string;
}

const Footer = () => {
  const tsFollowInfo: IFollowInfo[] = followInfo as IFollowInfo[];

  return (
    <footer className="h-auto bg-dark-gray">
      <div className="custom-container flex justify-between items-center">
        <div className="flex flex-col gap-[60px] pt-[60px] pb-[30px]">
          <div className="w-fit">
            <Link to="/" aria-label="CognitDev Home">
              <span className="footer-logo text-smoke-white font-semibold font-quicksand text-[56px] hover:text-light-gray">
                CognitDev
              </span>
            </Link>
          </div>

          <div className="w-full max-w-[600px]">
            <h2 className="text-smoke-white font-medium font-quicksand text-[32px]">
              Let's collaborate to transform your vision into a market leading
              business.
            </h2>
          </div>

          <nav>
            <ul className="flex gap-[20px]">
              {tsFollowInfo.map((elem, idx) => {
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

          <h3 className="text-light-gray font-quicksand font-medium text-[16px]">
            © 2026 <span className="text-smoke-white">CognitDev</span>. All
            Rights Reserved.
          </h3>
        </div>
        <div>
          <Link to="/contact">
            <div className="contact-spin bg-smoke-white h-[200px] w-[200px] rounded-full flex justify-center items-center">
              <p className="text-dark-gray font-mohave font-semibold text-[38px] uppercase">
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
