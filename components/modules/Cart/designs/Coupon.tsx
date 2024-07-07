"use client";
import React from "react";

const Coupon = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-5 rounded-lg border-2 w-full  p-4 md:flex-row">
      <div className="text-[#1A1A1A] text-lg font-extrabold">Coupon Code</div>
      <div className="flex flex-1 items-center border-2 rounded-full justify-between">
        <input
          className="flex-1 border-none outline-none ml-4"
          type="text"
          id="message"
          placeholder="Enter Code"
        />
        <div className="w-fit  px-6 py-1 text-sm font-extrabold text-center  rounded-full text-white bg-navy md:py-4 md:text-base ">
          Apply Coupon
        </div>
      </div>
    </div>
  );
};

export default Coupon;
