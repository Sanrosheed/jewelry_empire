"use client";
import React from "react";
import Image from "next/image";
import Bangles from "../../../public/bangles.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 10, delay: 0.4 },
  },
};
const StoreLocation = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col md:flex-row bg-[#2D2D2D] gap-10 items-center md:p-20"
    >
      <div className="flex flex-col gap-6 w-1/2 items-center">
        <Image src={Bangles} alt="" />
        <h1 className="text-3xl uppercase flex flex-col gap-4">
          Make a Gift <span className="h-0.5 w-20 m-auto bg-[#E8CF36]"></span>
        </h1>
        <p className="uppercase font-extralight text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
          lorem amet arcu egestas congue. Rhoncus scelerisque m aenean.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-1/2 items-center">
        <h1 className="text-3xl uppercase flex flex-col gap-4">
          Our Store <span className="h-0.5 w-16 m-auto bg-[#E8CF36]"></span>
        </h1>
        <p className="uppercase font-extralight text-sm text-center">
          Experience timeless elegance with our handcrafted jewelry, designed to
          blend beauty and modern sophistication. From delicate necklaces to
          bold rings, our collection offers styles for everyone. Featuring
          luxurious gemstones and fine craftsmanship, each piece is perfect for
          gifting or personal style. Discover unmatched quality and charm today.
        </p>
        <button className="uppercase my-6 py-1 px-8 border border-[#E8CF36] rounded-sm text-[#E8CF36]">
          Find out more
        </button>
      </div>
    </motion.div>
  );
};

export default StoreLocation;
