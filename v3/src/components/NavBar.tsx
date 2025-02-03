// tell nextjs to render on the client side
"use client";

import { navbarData, copyRightIcon } from "@/assets";

interface PropTypes {
  id: string;
}

const NavBar: React.FC<PropTypes> = ({ id }) => {
  const dateYear = new Date().getFullYear();

  return (
    <div
      id="navbar"
      className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-4 z-10"
    >
      <a href="#home">
        <span className="text-xl font-semibold text-red-400">Dev</span>.
        <span className="block origin-bottom text-[12px] font-semibold dark:text-white w-full text-center">Jay</span>
      </a>
      <div className="flex flex-col gap-y-3 sm:gap-y-2">
        {navbarData.map((nav, i) => (
          <a key={i} href={"/#" + nav.id} className="group flex flex-col items-center gap-y-2">
            <span
              className={`text-2xl group-hover:scale-125 transition-all
              ${nav.id === id ? "text-red-500 scale-110" : "text-yellow-500 scale-100"}
              `}
            >
              {nav.icon}
            </span>
            <span
              className={`text-[10px] tracking-wide group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white
                ${i % 2 === 0 ? "translate-x-2" : "-translate-x-2"}
                ${nav.id === id ? "opacity-100 -translate-x-0" : "opacity-0"}
              `}
            >
              {nav.name}
            </span>
          </a>
        ))}
      </div>
      <p className="flex items-center justify-center text-[13px] text-gray-500 mt-12">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-left tracking-wider dark:text-gray-200 transition-colors">
          {copyRightIcon}&nbsp;{dateYear}
        </span>
      </p>
    </div>
  );
};

export default NavBar;
