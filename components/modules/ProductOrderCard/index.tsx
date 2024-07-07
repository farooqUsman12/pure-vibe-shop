import Image from "next/image";
import React from "react";

const ProductOrderCard = ({ data }: any) => {
  return (
    <div>
      <div className="  flex items-center justify-between">
        <div className="flex items-center gap-6">
          {data?.image && (
            <Image src={data?.image} alt="" height={100} width={100} />
          )}
          <div className="text-[#3C4242] font-extrabold">
            <div className="text-[#3C4242]">{data?.name}</div>
            <div className="text-[#3C4242]">
              Color: <span className="text-[#807D7E]">White</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-20 text-[#807D7E] font-extrabold">
          <div className="text-[#3C4242]">
            QTY: <span className="text-[#807D7E]">{data?.quantity}</span>{" "}
          </div>
          <div>${data?.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrderCard;
