import React from "react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = (props) => {
  return (
    <div className="flex flex-col items-center border rounded-md">
      <Image src={props.img} alt="ring" className="w-full" />
      <h1 className="text-[#E8CF36] mt-2">{props.title}</h1>
      <Link href="" className="mb-2">
        Explore
      </Link>
    </div>
  );
};

export default CategoryCard;
