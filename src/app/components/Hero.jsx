"use client";

import React from "react";
import Image from "next/image";
import heroBg from "../../../public/heroBg.png";
import ring1 from "../../../public/ring1.png";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: 10,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, duration: 1.5, delay: 0.1 },
  },
};

const Hero = () => {
  return (
    <div className="relative my-4 min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center pl-10 md:py-24 md:px-32 md:gap-14"
      >
        <Image src={ring1} alt="ring" height={1000} width={1000} />
        <div className="py-20">
          <h1 className="uppercase font-bold text-3xl mb-4">
            New collection{" "}
            <span className="text-[#E8CF36]">&quot;Dimond&quot;</span>
          </h1>
          <p className="pr-6 uppercase font-extralight text-sm">
            Explore our handcrafted jewelry collection, where timeless elegance
            meets modern sophistication. From delicate necklaces to bold rings,
            each piece reflects exquisite craftsmanship. Whether for yourself or
            a gift, our jewelry adds beauty and charm to every moment.
          </p>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            className="uppercase my-6 py-1 px-6 border border-[#E8CF36] rounded-md text-[#E8CF36]"
          >
            Find out more
          </motion.button>
        </div>
      </motion.div>
      <Image
        src={heroBg}
        alt="background"
        fill={true}
        className="object-cover -z-10"
      />
    </div>
  );
};

export default Hero;
