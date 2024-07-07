import React, { useState } from "react";
import { gilroyMedium } from "@/shared/Fonts";
import ReactStars from "react-rating-stars-component";
import { calculateDiscountPercentage } from "@/utils/functions";
import { SiFacebook } from "react-icons/si";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { decrementQuantity, incrementQuantity } from "@/redux/slices/cart";
import { FiMinus } from "react-icons/fi";
import { HiOutlinePlus, HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ProductDesc = ({ product }: any) => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex flex-col col-span-2">
      <div className="flex items-center gap-3">
        <div className={`text-2xl text-black ${gilroyMedium.className}`}>
          {product?.name}
        </div>
        <div className="border-[#2b2d4210] rounded-lg p-1 bg-[#2b2d4210]">
          In Stock ({product?.stock})
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ReactStars count={5} size={24} activeColor="#ffd700" />
        <div> 4 Review</div>
        <div>•</div>
        <div>
          SKU: <span>2,51,594</span>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <del className="text-[#B3B3B3] text-2xl">$ {product?.price}</del>
        <span className="font-bold text-2xl">${product?.price}</span>
        <div className="border-2 border-[#ea4b48] bg-[#ea4b48] p-1 rounded-full">
          {calculateDiscountPercentage(product?.price, product?.price)}% Off
        </div>
      </div>

      <div className="mt-10 text-lg font-bold flex justify-between">
        <div className="flex items-center gap-2">
          <div>Share item:</div>
          <div className="flex gap-3 items-center">
            <SiFacebook size={24} color="#2B2D42" />
            <FaTwitter size={24} color="grey" />
            <FaPinterest size={24} color="grey" />
            <FaInstagram size={24} color="grey" />
          </div>
        </div>
      </div>

      <div className="mt-8 text-grey text-base">{product.description}</div>

      <div className=" flex gap-3 items-center mt-6">
        <div className="flex gap-4 items-center border-2 rounded-full p-1">
          <div
            className="rounded-full text-center  h-fit p-2 text-lg bg-[#F2F2F2] cursor-pointer"
            onClick={() => setQuantity(quantity - 1)}
          >
            <FiMinus size={15} />
          </div>
          <div className="font-black text-lg">{quantity}</div>
          <div
            className="rounded-full text-center  h-fit p-2 text-lg bg-[#F2F2F2] cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          >
            <HiOutlinePlus size={15} />
          </div>
        </div>
        {cart.find((cartItem: any) => cartItem?._id == product?._id) ? (
          <div className="flex border-2 w-48 rounded-full h-auto p-2 justify-center items-center gap-3 bg-lime-500 text-white text-lg font-bold ">
            <div>Added to Cart</div>
            <div>
              <HiOutlineShoppingBag />
            </div>
          </div>
        ) : (
          <div className="flex border-2 w-48 rounded-full h-auto p-2 justify-center items-center gap-3 bg-navy text-white text-lg font-bold ">
            <div>Add to Cart</div>
            <div>
              <HiOutlineShoppingBag />
            </div>
          </div>
        )}

        <div className=" rounded-full text-center  h-fit p-2 text-lg bg-[#F2F2F2]">
          <CiHeart size={30} />
        </div>
      </div>

      <div className="mt-4 text-lg font-extrabold">
        Category:<span className="text-grey"> {product.category}</span>
      </div>
    </div>
  );
};

export default ProductDesc;
