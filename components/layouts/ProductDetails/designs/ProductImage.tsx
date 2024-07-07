"use client";
import Image from "next/image";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ProductImage = ({ product }: any) => {
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col items-center gap-2">
        <IoIosArrowUp className="h-5 w-5 text-[#999999]" />
        {product?.images?.slice(0, 4).map((image: any, index: number) => (
          <Image
            key={index}
            className="h-20 w-auto"
            src={image.url}
            height={500}
            width={500}
            alt=""
          />
        ))}
        <IoIosArrowDown className="h-5 w-5 text-[#999999]" />
      </div>

      <div className="flex justify-center items-center col-span-2 p-4">
        <Image
          className="w-auto h-92"
          src={product?.images?.[0]?.url || ""}
          height={500}
          width={500}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductImage;
