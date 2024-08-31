import React from "react";
import Image from "next/image";
import heroBg from "../../../public/heroBg.png";
import ring1 from "../../../public/ring1.png";

const Hero = () => {
  return (
    <div className="relative my-4 min-h-screen">
      <div className="flex flex-col md:flex-row items-center pl-10 md:py-24 md:px-32 md:gap-14">
        <Image src={ring1} alt="ring" height={1000} width={1000} />
        <div className="py-20">
          <h1 className="uppercase font-bold text-3xl mb-4">
            New collection{" "}
            <span className="text-[#E8CF36]">&quot;Dimond&quot;</span>
          </h1>
          <p className="pr-6 uppercase font-extralight text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            integer lorem amet arcu egestas congue. Rhoncus scelerisque mi, ac
            sed lacus aliquam at tortor. Risus nulla massa ut vitae phasellus
            dictum. Lacus feugiat mollis aenean ac. Cursus in at sagittis
            vivamus consequat.
          </p>
          <button className="uppercase my-6 py-1 px-6 border border-[#E8CF36] rounded-md text-[#E8CF36]">
            Find out more
          </button>
        </div>
      </div>
      <Image
        src={heroBg}
        alt="background"
        fill={true}
        className="object-cover -z-10"
      />
    </div>
  );
};

export default Hero;
