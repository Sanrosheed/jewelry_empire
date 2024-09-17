"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";
import Image from "next/image";
import ItemsCard from "../layouts/ItemsCard";
import item1 from "../../../public/item1.png";
import item2 from "../../../public/item2.png";
import item3 from "../../../public/item3.png";

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 10, duration: 3.5, delay: 0.1 },
  },
};
const Items = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="flex flex-col md:flex-row gap-12 justify-center items-center m-8"
    >
      <ItemsCard
        img={item1}
        title="Gold & Bracelets"
        value="Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam"
      />
      <ItemsCard
        img={item2}
        title="Gold & Diamond Rings"
        value="Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam"
      />
      <ItemsCard
        img={item3}
        title="Gold & Bracelets"
        value="Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam"
      />
    </motion.div>
  );
};

export default Items;
