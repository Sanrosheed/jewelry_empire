"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SilverEarRing from "../../../public/silver_earring.png";
import Model from "../../../public/model.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 10, delay: 0.4 },
  },
};
const Info = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col md:flex-row bg-[#2D2D2D] gap-10 mx-8 rounded-md"
    >
      <Image src={SilverEarRing} alt="SilverEarRing" className="m-auto pl-4" />
      <div className="m-auto text-center flex flex-col gap-8">
        {" "}
        <h1 className="text-2xl flex flex-col gap-2">
          Silver-Dimonds Earrings
          <span className="h-0.5 w-48 m-auto bg-[#E8CF36]"></span>
        </h1>
        <p className="font-extralight">
          Explore our elegant Silver-Dimonds Earrings, where beauty meets modern
          style. From necklaces to statement rings, each silver piece is crafted
          with care, perfect for gifting or treating yourself to something
          special.
        </p>
        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="uppercase cursor-pointer text-[#E8CF36] underline underline-offset-4"
        >
          Learn More
        </Link>
      </div>
      <Image src={Model} alt="SilverEarRing" />
    </motion.div>
  );
};

export default Info;
