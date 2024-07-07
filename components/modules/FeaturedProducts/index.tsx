"use client";
import React from "react";
import ProductsList from "../ProductsList";
import { motion } from "framer-motion";

const FeatureProducts = () => {
  return (
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center gap-6 mt-20 p-4"
      >
        <div className=" text-red text-lg tracking-[6.25px] font-medium">
          FEATURED PRODUCTS
        </div>
        <div className="  text-black text-5xl font-semibold">
          Choose as you want
        </div>
      </motion.div>

      <ProductsList noOfItems={8} itemsInRow />
    </div>
  );
};

export default FeatureProducts;
