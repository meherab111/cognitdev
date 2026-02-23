import { Link } from "react-router";
import navInfo from "../../apis/header/navInfo";
import type { INavInfo } from "../../types/header/typesNav";
import { HiMiniBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const navbarIconClass: string =
    "text-[38px] text-dark-gray absolute navbarIcon";

  return (
    <header className="w-full bg-smoke-white fixed top-0 left-1/2 -translate-x-1/2 z-100">
      <nav className="custom-container relative h-[100px] flex justify-between items-center">
        <Link to={"/"} onClick={handleCloseSidebar} aria-label="CognitDev Home">
          <img
            src="/images/logo/cognitdev-logo.webp"
            alt="CognitDev Logo"
            width="60"
            height="60"
            className="h-auto w-[50px] md:w-[54px] object-contain"
          />
        </Link>
        <button
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
          className="z-100 relative sm:hidden w-[38px] h-[40px] flex items-center justify-center"
        >
          <RxCross2
            className={`${navbarIconClass} ${
              openSidebar ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          />
          <HiMiniBars2
            className={`${navbarIconClass} ${
              openSidebar ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          />
        </button>

        <div
          onClick={handleCloseSidebar}
          className={`fixed inset-0 bg-dark-gray/20 backdrop-blur-xs w-full min-h-screen z-50 bg-overlay sm:hidden ${
            openSidebar ? "opacity-100" : "opacity-0"
          }`}
        />

        <ul
          className={`mobile-navbar ${
            openSidebar ? "translate-x-0" : "translate-x-full sm:translate-x-0"
          }`}
        >
          {navInfo.map((elem: INavInfo, idx: number) => {
            return (
              <li key={idx}>
                <Link
                  to={elem.path}
                  onClick={handleCloseSidebar}
                  aria-label={elem.text}
                  className="font-quicksand font-semibold text-[24px] sm:text-[18px] text-dark-gray hover:text-light-gray/70 border-b-2 border-b-dark-gray hover:border-b-smoke-white"
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
