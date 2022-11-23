import React from "react";

type Props = {
  title: string;
  isActive?: boolean;
  onClick?: () => void; // function that returns nothing
};

function NavBtn({ title, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`hover:bg-[#036756] text-white py-2 px-4 rounded font-bold ${
        isActive && "bg-[#036756]"
      }`}
    >
      {title}
    </button>
  );
}

export default NavBtn;
