import type { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

interface IButton {
  link: string;
  children: ReactNode;
  btnTheme: "dark" | "light";
}

const Button = (props: IButton) => {
  const { link, children, btnTheme } = props;

  const btnClass: string =
    btnTheme === "dark"
      ? "bg-dark-gray border border-dark-gray text-smoke-white hover:bg-smoke-white hover:text-dark-gray"
      : "bg-smoke-white border border-smoke-white text-dark-gray hover:bg-dark-gray hover:text-smoke-white";

  return (
    <Link
      to={link}
      className={`inline-flex items-center gap-[6px] px-[20px] py-[12px] font-quicksand text-[18px] rounded-full font-medium ${btnClass}`}
    >
      {children} <MdArrowOutward />
    </Link>
  );
};

export default Button;
