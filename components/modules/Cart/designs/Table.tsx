"use client";
import { decrementQuantity, incrementQuantity } from "@/redux/slices/cart";
import { RootState } from "@/redux/store";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Divider } from "antd";

const TablePage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  return (
    <div>
      <div className="border-2 border-[#e6e6e6] rounded-lg">
        <div>
          <div className="grid grid-cols-7  items-center gap-[76px] w-full p-2 rounded-t-lg text-[#999] font-semibold text-sm md:gap-6">
            <div className="col-span-1 md:col-span-3">PRODUCT</div>
            <div className="col-span-1">PRICE</div>
            <div className="col-span-1">QUANTITY</div>
            <div className="col-span-1 md:col-span-2 ">SUBTOTAL</div>
          </div>
          <Divider className="my-2 bg-[#e6e6e6]" />
        </div>
        <div>
          {cartItems.length === 0 ? (
            <div>
              <div className="text-center py-4 font-semibold">
                No Item In Cart
              </div>
              <Divider className="my-2 bg-[#e6e6e6]" />
            </div>
          ) : (
            cartItems?.map((item: any, idx) => (
              <>
                <div
                  key={idx}
                  className="grid grid-cols-7 items-center px-2 py-1 font-medium text-sm"
                >
                  <div className="flex items-center col-span-3">
                    <div>
                      <Image
                        src={item?.images[0]?.url}
                        height={50}
                        width={50}
                        alt=""
                      />
                    </div>
                    <div>{item?.productName}</div>
                  </div>
                  <div className="flex gap-1">
                    <div>${item?.price}</div>
                  </div>
                  <div className="flex items-center border-2 rounded-full p-2 gap-3 w-fit cursor-pointer">
                    <div
                      className="border-2 bg-[#E6E6E6] rounded-full p-1"
                      onClick={() => dispatch(decrementQuantity(item))}
                    >
                      <FiMinus />
                    </div>
                    <div>{item?.quantity}</div>
                    <div
                      className="border-2 bg-[#E6E6E6] rounded-full p-1 cursor-pointer"
                      onClick={() => dispatch(incrementQuantity(item))}
                    >
                      <FiPlus />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 gap-3 col-span-2">
                    <div>${item.price * item?.quantity}</div>
                    <div className="border-2 rounded-full p-1 cursor-pointer">
                      <RxCross2 />
                    </div>
                  </div>
                </div>
                <Divider className="my-2 bg-[#e6e6e6]" />
              </>
            ))
          )}
        </div>
        <div className="rounded-b-lg p-2 flex justify-between text-xs text-[#4d4d4d] font-semibold">
          <div className="bg-[#f2f2f2] py-2 px-4 w-fit rounded-full">
            Return to shop
          </div>
          <div className="bg-[#f2f2f2] py-2 px-4 w-fit rounded-full">
            Update Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;
