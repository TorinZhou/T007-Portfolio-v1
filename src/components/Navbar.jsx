import React, { useState } from "react";
import Logo from "../assets/logo-without-margins.png";
import { FaBars, Fatimes } from "react-icons/fa";

const Navbar = () => {
  const [menuIsShown, setMenuIsShown] = useState(false);
  const toggleMenu = () => setMenuIsShown((menuIsShown) => !menuIsShown);

  return (
    <>
      <div className="fixed flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 text-gray-300">
        <div>
          <img src={Logo} alt="logo" style={{ width: "150px" }}></img>
        </div>
        {/* Menu */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        {/* Hamburger */}
        <div className="z-10 md:hidden" onClick={toggleMenu}>
          <FaBars />
        </div>
        {/* Mobile Menu */}
        <ul
          className={
            !menuIsShown
              ? "hidden"
              : "absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
        {/* Social Icons */}
        {/* {menuIsShown && <div className="hidden"></div>} */}
      </div>
    </>
  );
};

export default Navbar;
