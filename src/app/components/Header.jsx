"use client";

import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 1.5, delay: 0.1 }}
      className="flex w-full justify-center gap-8 py-4"
    >
      <h3>(800) 120 2387</h3>
      <input
        className=" w-1/4 md:w-2/3 rounded-xl px-6 py-0.5 placeholder:text-[#CACACA] placeholder:font-extralight placeholder:text-sm bg-transparent border"
        type="text"
        placeholder="Search for Gold Jewelry, Diamond Jewelry and more..."
      />
      <div className="flex gap-2 text-[#E8CF36] text-xl">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </motion.div>
  );
};

export default Header;
