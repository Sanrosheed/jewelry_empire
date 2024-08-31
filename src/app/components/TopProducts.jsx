"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import TopProductsCart from "../layouts/TopProductsCart";
import neck1 from "../../../public/neck1.png";
import neck2 from "../../../public/neck2.png";
import neck3 from "../../../public/neck3.png";
import neck4 from "../../../public/neck4.png";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const TopProducts = () => {
  return (
    <div className="m-8">
      <div className="flex flex-row justify-between">
        <h1>Top Products</h1>
        <div className="flex">
          <Link
            href="#"
            // to="#"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer text-[#E8CF36] font-extralight"
          >
            Get Similar Product
          </Link>
          <IoIosArrowRoundForward />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-6 gap-20">
        <TopProductsCart
          img={neck1}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 124000"
          star={<FaStar />}
        />
        <TopProductsCart
          img={neck2}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 124000"
          star={<FaStar />}
        />
        <TopProductsCart
          img={neck3}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 124000"
          star={<FaStar />}
        />
        <TopProductsCart
          img={neck4}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 124000"
          star={<FaStar />}
        />
      </div>
    </div>
  );
};

export default TopProducts;
