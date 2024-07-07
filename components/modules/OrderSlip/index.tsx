import React from "react";

const OrderSlip = ({ data }: any) => {
  return (
    <div className="bg-white w-full">
      <div className="flex items-center justify-between mx-auto bg-[#F6F6F6] px-6 py-6 w-[80%] ">
        <div>
          <div className="text-black font-bold">Order no: #{data?._id}</div>
          <div className="text-[#807D7E] text-sm font-bold">
            Placed On {data?.createdAt?.slice(0, 10)}{" "}
          </div>
        </div>
        <div className="text-[#807D7E] text-sm font-bold">
          Total:{" "}
          <span className="text-black font-bold">${data?.itemsPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSlip;
