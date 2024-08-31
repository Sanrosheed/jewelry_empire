import React from "react";
import Image from "next/image";
import Link from "next/link";
import SilverEarRing from "../../../public/silver_earring.png";
import Model from "../../../public/model.png";

const Info = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#2D2D2D] gap-10 mx-8 rounded-md">
      <Image src={SilverEarRing} alt="SilverEarRing" className="m-auto pl-4" />
      <div className="m-auto text-center flex flex-col gap-8">
        {" "}
        <h1 className="text-2xl flex flex-col gap-2">
          Silver-Dimonds Earrings
          <span className="h-0.5 w-48 m-auto bg-[#E8CF36]"></span>
        </h1>
        <p className="font-extralight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
          lorem amet arcu egestas congue. Rhoncus scelerisque m aenean ac.
          Cursus in at sagittis vivamus Rhoncus scelerisque m aenean{" "}
        </p>
        <Link
          href="#"
          // to="#"
          spy={true}
          smooth={true}
          duration={500}
          className="uppercase cursor-pointer text-[#E8CF36] underline underline-offset-4"
        >
          Learn More
        </Link>
      </div>
      <Image src={Model} alt="SilverEarRing" />
    </div>
  );
};

export default Info;
