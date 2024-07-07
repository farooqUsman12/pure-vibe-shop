"use client";
import React, { useEffect, useState } from "react";
import { Products } from "@/utils/constants-data";
import ProductCategory from "./designs/ProductCategory";
import ProductsGrid from "./designs/ProductsGrid";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/types/constants-data";
import { RootState } from "@/redux/store";
import { getProducts } from "@/redux/actions/productsActions";

const ProductsList = ({ noOfItems, search, itemsInRow }: any) => {
  const [category, setCategory] = useState();

  return (
    <div className="flex flex-col  gap-4 mt-8 p-4 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProductCategory setCategory={setCategory} />
      </motion.div>

      <div className="flex flex-col gap-4 col-span-3">
        <ProductsGrid
          category={category}
          noOfItems={noOfItems}
          itemsInRow={itemsInRow}
        />
      </div>
    </div>
  );
};

export default ProductsList;
