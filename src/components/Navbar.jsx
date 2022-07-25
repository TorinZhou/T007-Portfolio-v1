import React from "react";
import Logo from "../assets/logo-without-margins.png";
import { FaBars, Fatimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} style={{ width: "150px" }}></img>
        </div>
        {/* Menu */}
        <div>
          <ul className="flex justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Hamburger */}
        <div className="hidden">
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
        <div></div>
      </div>
    </>
  );
};

export default Navbar;