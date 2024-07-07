import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductsGrid from "../ProductsList/designs/ProductsGrid";
import ProductsSidebar from "./designs/ProductsSidebar";

const ProductShop = ({ search }: any) => {
  const [category, setCategory] = useState();

  return (
    <div className="grid grid-cols-1 h-full gap-2 md:grid-cols-4">
      <motion.div
        className="h-full mb-4 w-fit"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProductsSidebar setCategory={setCategory} />
      </motion.div>

      <motion.div
        className="col-span-3 w-full flex flex-col gap-4 "
        initial={{ x: "7vw" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <ProductsGrid category={category} search={search} />
      </motion.div>
    </div>
  );
};

export default ProductShop;
