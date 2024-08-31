import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import TopProductsCart from "../layouts/TopProductsCart";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import NewProd1 from "../../../public/newprod1.png";
import NewProd2 from "../../../public/newprod2.png";
import NewProd3 from "../../../public/newprod3.png";
import NewProd4 from "../../../public/newprod4.png";

const NewProducts = () => {
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
          img={NewProd1}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 105230"
          star={<FaStar />}
        />
        <TopProductsCart
          img={NewProd2}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 104032"
          star={<FaStar />}
        />
        <TopProductsCart
          img={NewProd3}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 220000"
          star={<FaStar />}
        />
        <TopProductsCart
          img={NewProd4}
          details="Earring Necklace Jewellery Chain Gemstone"
          price="Rs 200320"
          star={<FaStar />}
        />
      </div>
    </div>
  );
};

export default NewProducts;
