import { Link } from "react-router";
import navInfo from "../apis/header/navInfo.json";

interface NavItems {
  text: string;
  path: string;
}

const Header = () => {
  const tsNavInfo = navInfo as NavItems[];

  return (
    <header className="custom-container">
      <nav className="flex justify-between items-center h-[100px]">
        <Link to={"/"} aria-label="Home">
          <img
            src="/images/logo/cognitdev-logo.webp"
            alt="CognitDev Logo"
            width="197"
            height="202"
            className="h-auto w-[50px] object-cover"
          />
        </Link>
        <ul className="flex gap-[30px]">
          {tsNavInfo.map((elem, idx) => {
            return (
              <li key={idx}>
                <Link
                  to={elem.path}
                  aria-label={elem.text}
                  className="font-quicksand font-medium text-[18px]"
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
