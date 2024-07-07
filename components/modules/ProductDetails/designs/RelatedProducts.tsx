import {
  gilroyBold,
  gilroyLight,
  gilroyMedium,
  gilroySemiBold,
} from "@/shared/Fonts";
import Image from "next/image";
import React from "react";

const Data = [
  {
    discount: "Save 60%",
    imageSrc: "/img/hair-gel-product.jpeg",
    productName: "Hair growth Gel",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout.",
    price: 40,
    originalPrice: 100,
  },

  {
    discount: " Save 50%",
    imageSrc: "/img/derox-herbal-tea-product.png",
    productName: "Detox Herbal Tea",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout.",
    price: 50,
    originalPrice: 100,
  },

  {
    discount: "Save 70%",
    imageSrc: "/img/tea-tree-product.png",
    productName: "Tea Tree & Mint",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout.",
    price: 30,
    originalPrice: 100,
  },

  {
    discount: "Save 70%",
    imageSrc: "/img/tea-tree-product.png",
    productName: "Tea Tree & Mint",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout.",
    price: 30,
    originalPrice: 100,
  },
];

const RelatedProducts = () => {
  return (
    <div className="container p-10 mb-16">
      <div
        className={`flex flex-col justify-center ${gilroySemiBold.className} md:flex-row`}
      >
        <div className="text-3xl ">Related Products</div>
      </div>
      <div className="flex flex-col gap-20 w-full mt-20 md:flex-row md:p-20 md:mt-0 md:gap-6">
        {Data.map((item, index) => (
          <div className="shadow  rounded-lg" key={index}>
            <div className="mt-2 text-xs border-2 w-fit p-2 rounded-r-lg bg-navy font-semibold text-white">
              {item.discount}
            </div>

            <div className="flex justify-center  ">
              <Image
                className="h-auto w-44 "
                src={item.imageSrc}
                height={500}
                width={500}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-2 p-4">
              <div className={`text-sm text-black ${gilroySemiBold.className}`}>
                {item.productName}
              </div>
              <div className="text-[#797979] text-xs">{item.description}</div>

              <div className="flex justify-between items-center p-3">
                <div
                  className={`text-2xl font-extrabold text-black ${gilroyMedium.className}`}
                >
                  {item.price}
                  <span className="text-base font-bold">$</span>
                  <span className="text-sm">/</span>
                  <del
                    className={`text-sm  text-black ${gilroyMedium.className}`}
                  >
                    {item.originalPrice}
                  </del>
                </div>
                <div className="border-2 border-red bg-red text-white text-lg px-6 py-2 rounded-lg">
                  Buy
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
