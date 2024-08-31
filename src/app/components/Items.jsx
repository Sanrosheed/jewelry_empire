import React from "react";
import Image from "next/image";
import ItemsCard from "../layouts/ItemsCard";
import item1 from "../../../public/item1.png";
import item2 from "../../../public/item2.png";
import item3 from "../../../public/item3.png";

const Items = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 justify-center items-center m-8">
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
    </div>
  );
};

export default Items;
