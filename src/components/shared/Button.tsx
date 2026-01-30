import type { ReactNode } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";

interface IButton {
  link: string;
  children: ReactNode;
}

const Button = (props: IButton) => {
  const { link, children } = props;

  return (
    <Link
      to={link}
      className="inline-flex items-center gap-[6px] px-[20px] py-[12px] font-quicksand text-[18px] rounded-full bg-dark-gray border border-dark-gray text-smoke-white hover:bg-smoke-white hover:text-dark-gray font-medium"
    >
      {children} <MdArrowOutward />
    </Link>
  );
};

export default Button;
