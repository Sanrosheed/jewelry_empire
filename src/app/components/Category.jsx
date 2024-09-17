"use client";
import { motion } from "framer-motion";
import React from "react";
import CategoryCard from "../layouts/CategoryCard";
import Cat1 from "../../../public/cat1.png";
import Cat2 from "../../../public/cat2.png";
import Cat3 from "../../../public/cat3.png";
import Cat4 from "../../../public/cat4.png";
import Cat5 from "../../../public/cat5.png";
import Cat6 from "../../../public/cat6.png";
import Cat7 from "../../../public/cat7.png";
import Cat8 from "../../../public/cat8.png";
import Cat9 from "../../../public/cat9.png";
import Cat10 from "../../../public/cat10.png";

const containerVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 10, delay: 0.4 },
  },
};
const Category = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      className="mx-8 flex flex-col items-center"
    >
      <div className="mx-auto my-6 text-center">
        <h1 className="text-4xl text-[#E8CF36] font-semibold mb-3">
          Shop By Category
        </h1>
        <p className="uppercase text-sm font-extralight">
          Browse through your favourite categories. Weve got them all!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-6">
        <CategoryCard img={Cat1} title="Earring" />
        <CategoryCard img={Cat2} title="Gold Earring" />
        <CategoryCard img={Cat3} title="Wedding Earring" />
        <CategoryCard img={Cat4} title="Gold Necklace" />
        <CategoryCard img={Cat5} title="Bracelets" />
        <CategoryCard img={Cat6} title="Neck Wear" />
        <CategoryCard img={Cat7} title="Nose Pin" />
        <CategoryCard img={Cat8} title="Diamond Necklace" />
        <CategoryCard img={Cat9} title="Gold Coins" />
        <CategoryCard img={Cat10} title="New Earrings" />
      </div>
    </motion.div>
  );
};

export default Category;
