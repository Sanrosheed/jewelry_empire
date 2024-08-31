import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import GooglePlay from "../../../public/googlePlay.png";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 justify-between mx-16 my-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#E8CF36] text-xl mb-4">Useful Links</h1>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#E8CF36]"
          >
            Delivery Details
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#E8CF36]"
          >
            International Shipping
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#E8CF36]"
          >
            Payment Options
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#E8CF36]"
          >
            Track Your Order
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#E8CF36]"
          >
            Return
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-[#E8CF36]"
          >
            Find a Store
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[#E8CF36] text-xl mb-4">Information</h1>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
          >
            Careers
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
          >
            Blog
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
          >
            Offers Details
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
          >
            Help & FAQs
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-[#E8CF36]"
          >
            About Us
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[#E8CF36] text-xl mb-4">Useful Links</h1>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="flex flex-row cursor-pointer gap-4 hover:text-[#E8CF36]"
          >
            <span className="text-[#E8CF36] text-xl">{<FaEnvelope />}</span>Mail
            to Us
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="flex flex-row cursor-pointer gap-4 hover:text-[#E8CF36]"
          >
            <span className="text-[#E8CF36] text-xl">{<FaPhoneAlt />}</span>
            +91-9204824823
          </Link>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="flex flex-row cursor-pointer gap-4 hover:text-[#E8CF36]"
          >
            <span className="text-[#E8CF36] text-xl">
              {<LuMessageSquare />}
            </span>
            Chat to Us
          </Link>
        </div>

        <div>
          <h1 className="text-[#E8CF36] text-xl mb-4">Download The Apps</h1>
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className=""
          >
            <Image src={GooglePlay} alt="Playstore" />
          </Link>

          <div className="flex flex-row gap-8 mt-4">
            <h3 className="text-[#E8CF36] mb-4">Follow Us On</h3>
            <div className="flex gap-2 text-[#E8CF36] text-xl">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <h1 className="my-8 md:mx-80 text-center">
        @ 2023 Jewelery Empire Company Limited. All Right Reserved. <br /> Term
        & Conditions | Privacy Policy
      </h1>
    </div>
  );
};

export default Footer;
