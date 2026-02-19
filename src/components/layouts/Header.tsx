import { Link } from "react-router";
import navInfo from "../../apis/header/navInfo";
import type { INavInfo } from "../../types/header/typesNav";

const Header = () => {
  return (
    <header className="w-full bg-smoke-white fixed top-0 left-1/2 -translate-x-1/2 z-10">
      <nav className="custom-container h-[100px] flex justify-between items-center">
        <Link to={"/"} aria-label="CognitDev Home">
          <img
            src="/images/logo/cognitdev-logo.webp"
            alt="CognitDev Logo"
            width="60"
            height="60"
            className="h-auto w-[54px] object-contain"
          />
        </Link>
        <ul className="flex gap-[30px]">
          {navInfo.map((elem: INavInfo, idx: number) => {
            return (
              <li key={idx}>
                <Link
                  to={elem.path}
                  aria-label={elem.text}
                  className="font-quicksand font-semibold text-[18px] text-dark-gray hover:text-light-gray/70 border-b-2 border-b-dark-gray hover:border-b-smoke-white"
                >
                  {elem.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
