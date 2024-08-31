import React from "react";
import Image from "next/image";
import Link from "next/link";

const ShopByGenderCard = (props) => {
  return (
    <div className="items-center border rounded-md">
      <Image src={props.img} alt="ring" className="" />
      <div className="flex flex-row justify-between m-4">
        <h1 className="text-[#E8CF36]">{props.title}</h1>
        <Link href="" className="">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ShopByGenderCard;
