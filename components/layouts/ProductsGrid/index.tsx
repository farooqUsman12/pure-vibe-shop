"use client";
import Layout from "@/shared/Layout";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { gilroySemiBold } from "@/shared/Fonts";
import { IoIosArrowRoundForward } from "react-icons/io";
import CountdownTimer from "@/shared/CountdownTimer";
import ProductShop from "@/components/modules/ProductShop";

const ProductGrid = () => {
  const [search, setSearch] = useState("");
  const targetDate = Date.now() + 24 * 60 * 60 * 1000;

  return (
    <Layout currentPage="Shop">
      <div className="container">
        <div className="flex items-center p-6 relative">
          <Image
            className="mt-20 h-[430.133px] w-[1350px] object-cover object-top  rounded-xl"
            src="/img/shop1.jpeg"
            height={1000}
            width={1000}
            alt=""
          />

          <div className="flex justify-between py-14 items-center absolute top-24 left-24 right-24 transform  text-white  font-bold">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="flex flex-col gap-2"
            >
              <div className="font-light">Best Deals</div>
              <div className="text-4xl">Sale of the Month</div>

              <div>
                <CountdownTimer targetDate={targetDate} />
              </div>

              <div
                className={`flex justify-center gap-3 w-fit px-6 items-center mt-10 p-2 bg-white font-black rounded-full  text-black shadow-xl ${gilroySemiBold.className}`}
              >
                <div>Shop Now</div>
                <div>
                  <IoIosArrowRoundForward size={30} />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Image
                className="h-17 w-17"
                src="/img/frame.png"
                height={100}
                width={100}
                alt=""
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-between items-center p-6 md:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="text-sm text-[#808080] font-bold">
              Active Filters:
            </div>
            <div className="text-sm font-black ">New Products</div>
            <Image
              className="h-3 w-3 cursor-pointer"
              src="/img/cross.png"
              height={500}
              width={500}
              alt=""
            />
            <div className="text-sm font-black">Min $300 - Max 500</div>
            <Image
              className="h-3 w-3 cursor-pointer"
              src="/img/cross.png"
              height={500}
              width={500}
              alt=""
            />
          </div>

          <div className="flex mt-4 flex-col items-center gap-3 md:flex-row ">
            <div className="border-[1px] p-3 pl-3 px-32 rounded-lg border-black ">
              <input
                className="border-none outline-none text-left"
                type="email"
                id="email"
                placeholder="Search the items..."
                onChange={(e: any) => setSearch(e.target.value)}
              />
            </div>
            {/* <div className="border-[1px] text-white text-sm p-3 font-bold px-5 w-full rounded-lg  bg-navy ">
              Search
            </div> */}
          </div>
        </motion.div>

        <div className="flex gap-2">
          <ProductShop search={search} />
        </div>
      </div>
    </Layout>
  );
};

export default ProductGrid;
