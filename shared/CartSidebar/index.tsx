import { removeFromCart } from "@/redux/slices/cart";
import { RootState } from "@/redux/store";
import { Product } from "@/types/constants-data";
import { getTotalPrice } from "@/utils/functions";
import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { gilroyBold, gilroyLight, gilroyMedium } from "../Fonts";

const CartSidebar = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [total, setTotal] = useState<any>();
  const [totalObject, setTotalObject] = useState<any>();
  const dispatch = useDispatch();

  useEffect(() => {
    const cartItemsQuantity = cartItems.reduce(
      (totalQuantity, item: any) => totalQuantity + item?.quantity,
      0
    );
    setTotal(getTotalPrice(cartItems));
    setTotalObject(cartItemsQuantity);
  }, [cartItems]);

  const removeHandler = (value: Product) => {
    dispatch(removeFromCart(value));
  };

  return (
    <div className="flex flex-col justify-between h-full ">
      <div>
        <div className="flex justify-between">
          <div className={`font-bold text-2xl ${gilroyMedium.className}`}>
            Shopping Cart ({cartItems.length})
          </div>
        </div>
        {cartItems.map((item: any, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mt-10">
              <div className="flex gap-4 items-center">
                <div className="h-16 w-16">
                  <Image
                    className="h-16 w-16 object-cover object-top  rounded-xl"
                    src={item?.images[0]?.url}
                    height={500}
                    width={500}
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div>
                    {item?.name} ({item?.quantity})
                  </div>
                  <div>
                    <span className="text-gray-400">1kg</span> x 12.00
                  </div>
                </div>
              </div>
              <div
                className="rounded-full border-2 border-grey-300 p-1 cursor-pointer"
                onClick={() => removeHandler(item)}
              >
                <RxCross2 />
              </div>
            </div>
            <Divider />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div>{totalObject} Product</div>
          <div className={`font-semibold ${gilroyBold.className}`}>
            ${total}
          </div>
        </div>
        <Link
          href="/cart"
          className={`bg-navy text-center w-full py-3 text-white rounded-full  ${gilroyBold.className}`}
        >
          Checkout
        </Link>
        <Link
          href="/cart"
          className={`text-navy text-center font-bold w-full py-3 bg-slate-300 rounded-full  ${gilroyBold.className}`}
        >
          Go To Cart
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
