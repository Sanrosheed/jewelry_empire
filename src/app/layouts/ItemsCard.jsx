import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const ItemsCard = (props) => {
  return (
    <div className="w-full h-52 py-6 px-2 flex flex-row gap-0 md:gap-4 bg-[#2D2D2D] rounded-lg">
      <Image
        className="m-auto p-4"
        src={props.img}
        alt="img"
        //   width={500}
        //   height={500}
      />

      <div className="md:p-2 mt-5 flex flex-col justify-center">
        <h3 className="uppercase text-[#E8CF36] font-semibold text-xl mb-2">
          {props.title}
        </h3>
        <p className="text-sm font-extralight">{props.value}</p>
      </div>
    </div>
  );
};

export default ItemsCard;
