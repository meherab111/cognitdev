import type { ReactNode } from "react";

interface IProps {
  text: string;
  children?: ReactNode;
}

const SectionHeadingText = (props: IProps) => {
  const { text, children } = props;

  return (
    <h1 className="font-mohave text-[30px] md:text-[36px] lg:text-[42px] font-semibold text-dark-gray border-b-2 border-b-dark-gray">
      {text}
      {children}
    </h1>
  );
};

export default SectionHeadingText;
