import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Image src={logo} alt="" />

      <nav className="flex flex-row items-center gap-10 uppercase">
        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Home
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>

        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Gallery
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>

        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Info
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>

        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Events
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>

        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Products
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>

        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Store Location
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>

        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Contact Us
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>

        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
        >
          Login
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#E8CF36] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
