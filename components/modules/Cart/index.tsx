"use client";
import React, { useEffect, useState } from "react";
import TablePage from "./designs/Table";
import Layout from "@/shared/Layout";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getTotalPrice } from "@/utils/functions";
import Coupon from "./designs/Coupon";
import CartTotal from "./designs/CartTotal";
import { gilroyBold, gilroyMedium } from "@/shared/Fonts";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [total, setTotal] = useState<any>();

  useEffect(() => {
    setTotal(getTotalPrice(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <div className="container mt-20">
        <div className={`flex justify-center text-[#1A1A1A] text-3xl font-extrabold ${gilroyMedium.className}`}>
          My Shopping Cart
        </div>

        <div className="grid grid-cols-1 w-full gap-3 mt-8 mb-11 md:grid-cols-3">
          <div className="col-span-2 ">
            <TablePage />
            <Coupon />
          </div>
          <CartTotal total={total} />
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
