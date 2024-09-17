"use client";
import React from "react";
import women from "../../../public/women.png";
import men from "../../../public/men.png";
import children from "../../../public/children.png";
import ShopByGenderCard from "../layouts/ShopByGenderCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 10, delay: 0.4 },
  },
};
const ShopByGender = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="mx-8"
    >
      <div className="mx-auto my-6 text-center">
        <h1 className="text-4xl text-[#E8CF36] font-semibold mb-3">
          Shop By Gender
        </h1>
        <p className="uppercase text-sm font-extralight">
          Explore our latest designs curated just for you!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <ShopByGenderCard img={women} title="Women" />
        <ShopByGenderCard img={men} title="Men" />
        <ShopByGenderCard img={children} title="Kids" />
      </div>
    </motion.div>
  );
};

export default ShopByGender;
