import React, { useState } from "react";

const MENUS = [
  {
    title: "Intro",
    href: "#intro",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Work",
    href: "#work",
  },
];

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener("scroll", changeHeader);

  return (
    <div
      className={`flex items-center justify-between h-16 px-12 fixed top-0 left-0 right-0 ${
        isFixed
          ? "bg-white shadow-lg z-10 duration-250 transition-all ease-in-out"
          : ""
      }`}
    >
      <p className="font-semibold text-lg">Portfolio.</p>
      <div>
        {MENUS.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            className="px-3 text-sm transition-all ease-in-out bg-transparent opacity-60 hover:opacity-100 active:text-black"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
