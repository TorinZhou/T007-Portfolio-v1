import React from "react";
import Logo from "../assets/logo-without-margins.png";
import { FaBars, Fatimes } from "react-icons/fa";

const Navbar = () => {
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
        <div className="md:hidden">
          <FaBars />
        </div>
        {/* Mobile Menu */}
        <div className="hidden">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Social Icons */}
        <div className="hidden"></div>
      </div>
    </>
  );
};

export default Navbar;
