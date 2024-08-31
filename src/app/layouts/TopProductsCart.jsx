"use client";
import React from "react";
import Image from "next/image";
import StarRate from "./StarRate";

const TopProductsCart = (props) => {
  return (
    <div className="flex flex-col border rounded-md bg-[#101010]">
      <Image className="p-4 m-auto" src={props.img} alt="img" />
      <div className="px-4">
        <h2>{props.details}</h2>
      </div>
      <div className="flex flex-row px-4 py-4 justify-between">
        <h2>{props.price}</h2>{" "}
        <h1 className="text-[#E8CF36] flex flex-row">
          <StarRate />
        </h1>
      </div>
    </div>
  );
};

export default TopProductsCart;
