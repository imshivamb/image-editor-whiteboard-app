import React, { FC, MouseEvent } from "react";

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MainButton: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm py-3 md:py-3 bg-orange-500 text-white font-medium hover:bg-orange-500/90 w-full max-w-[275px]  rounded-xl hover:-translate-y-1 transition-all ease-in-out duration-300 hover:shadow-md"
    >
      {text}
    </button>
  );
};

export default MainButton;
