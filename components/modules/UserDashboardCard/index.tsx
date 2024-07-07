"use client";
import Image from "next/image";
import React from "react";

const UserDashboardCard = ({
  totalPrice,
  totalOrders,
  totalActiveOrders,
}: any) => {
  return (
    <div className=" bg-white p-4 rounded-xl">
      <div className="flex justify-between items-center mb-5">
        <div>
          <Image
            className="h-10 w-10"
            src="/img/bag.svg"
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="flex  items-center gap-2">
          <div className="text-xs text-[#BEC0CA]">This Week</div>
          <div>
            <Image
              className="h-5 w-5"
              src="/img/down.svg"
              height={100}
              width={100}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 mb-5 md:mb-0">
        <div className="">
          <div className="text-xs text-[#8B8D97] text-medium">
            Total Spending
          </div>
          <b>${totalPrice}</b>
        </div>
        <div>
          <div className="text-xs text-[#8B8D97] text-medium">Total Orders</div>
          <b>{totalOrders}</b>
        </div>
        <div>
          <div className="text-xs text-[#8B8D97] text-medium">Active Order</div>
          <b>{totalActiveOrders}</b>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardCard;
