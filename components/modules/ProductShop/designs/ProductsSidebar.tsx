"use client";
import { productTypesSidebar } from "@/utils/constants-data";
import { Divider } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const ProductsSidebar = ({ setCategory }: any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex w-full gap-8">
      <div className="flex flex-col  w-full gap-5">
        {productTypesSidebar.map((item: any, index: any) => (
          <div
            key={index}
            className={`flex items-center border-2 gap-2 w-full py-2 px-6  rounded-2xl ${
              selectedOption === index
                ? "bg-red text-white"
                : "bg-white text-black"
            }`}
            onClick={() => {
              setSelectedOption(index);
              setCategory();
            }}
          >
            <div className=" h-fit w-fit border-2 border-white rounded-full bg-white p-3">
              <Image
                className="h-8 w-8 "
                src={item.img}
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div className="text-xl  font-black">{item.name}</div>
          </div>
        ))}
      </div>
      <Divider className="h-full " type="vertical" />
    </div>
  );
};

export default ProductsSidebar;
