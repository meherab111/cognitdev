import { Link } from "react-router";
import navInfo from "../apis/header/navInfo.json";

interface INavInfo {
  text: string;
  path: string;
}

const Header = () => {
  const tsNavInfo = navInfo as INavInfo[];

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 custom-container">
      <nav className="flex justify-between items-center h-[100px] bg-smoke-white">
        <Link to={"/"} aria-label="CognitDev Home">
          <img
            src="/images/logo/cognitdev-logo.webp"
            alt="CognitDev Logo"
            width="54"
            height="54"
            className="h-auto w-[54px] object-contain"
          />
        </Link>
        <ul className="flex gap-[30px]">
          {tsNavInfo.map((elem, idx) => {
            return (
              <li key={idx}>
                <Link
                  to={elem.path}
                  aria-label={elem.text}
                  className="font-quicksand font-medium text-[18px] text-dark-gray hover:text-light-gray/70 border-b border-b-dark-gray hover:border-b-smoke-white"
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
