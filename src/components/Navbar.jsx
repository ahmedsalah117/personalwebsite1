import React, { useEffect, useState } from "react";
import { Colors } from "../utils/colors.js";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles.js";
import { logo, menu, close } from "../assets/index.js";
const Navbar = () => {
  const [active, setActive] = useState("second");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between max-w-7xl w-full mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="h-9 w-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Ahmed &nbsp; Bahnasy
          </p>
        </Link>
        <ul className="list-none md:flex flex-row hidden gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white bg-[#A020F0] px-3 py-1 rounded-md"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer duration-300`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-1 md:hidden justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 items-start justify-end">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[18px] font-poppins font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
