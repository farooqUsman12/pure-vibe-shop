"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { gilroyMedium, gilroySemiBold } from "@/shared/Fonts";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/types/constants-data";
import { addToCart } from "@/redux/slices/cart";
import { RootState } from "@/redux/store";
import { getProducts } from "@/redux/actions/productsActions";

const ProductsGrid = ({ category, search, noOfItems, itemsInRow }: any) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);
  const data = useSelector((state: RootState) => state.product.products);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const productsToShow = 12;

  useEffect(() => {
    let filteredData = [...data];

    if (category) {
      filteredData = filteredData.filter(
        (item: Product) => item.category === category
      );
    }

    if (search && search !== "") {
      const searchWords = search.toLowerCase().split(" ");
      filteredData = filteredData.filter((item: any) =>
        searchWords.every((word: string) =>
          item?.name.toLowerCase().includes(word)
        )
      );
    }

    filteredData = filteredData.slice(0, noOfItems || productsToShow);

    setProducts(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, search, category]);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = (item: Product) => {
    dispatch(addToCart(item));
  };

  return (
    <div
      className={`grid grid-cols-1 w-full mt-6 gap-6 ${
        itemsInRow ? "md:grid-cols-4" : "md:grid-cols-3"
      } `}
    >
      {products?.map((item: any, index: any) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          key={index}
          className="shadow-lg  rounded-lg relative p-4 cursor-pointer"
        >
          <Link href={`product/${item?._id}`}>
            <div className=" absolute mt-2 text-xs border-2 w-fit left-0 p-2 rounded-r-lg bg-navy font-semibold text-white">
              {item?.discount}
            </div>
            <div className="flex justify-center">
              <Image
                className="h-44 w-auto object-fit"
                src={item?.images[0]?.url}
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between gap-2 mt-2">
              <div className={`text-base  ${gilroySemiBold.className}`}>
                {item?.name?.slice(0, 30)}
                {item?.name?.length > 30 && "..."}
              </div>
              <div
                className={`text-[#797979] text-xss font-bold flex-1 ${gilroyMedium.className}`}
              >
                {item?.description?.slice(0, 100)}...
              </div>
            </div>
          </Link>
          <div className="flex justify-between items-center p-3">
            <div
              className={`text-2xl font-extrabold text-black ${gilroyMedium.className}`}
            >
              {item?.price}
              <span className="text-base font-bold"> $</span>
              <span className="text-sm"> / </span>
              <del className={`text-sm  text-black ${gilroyMedium.className}`}>
                {item?.originalPrice}
              </del>
            </div>
            {cart.find((cartItem: any) => cartItem?._id == item?._id) ? (
              <div className="border-2 cursor-pointer border-lime-500 bg-lime-500 text-white px-6 py-1 rounded-xl">
                Added to Cart
              </div>
            ) : (
              <div
                className="border-2 cursor-pointer border-red bg-red text-white text-lg px-6 py-1 rounded-xl"
                onClick={() => clickHandler(item)}
              >
                BUY
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductsGrid;
