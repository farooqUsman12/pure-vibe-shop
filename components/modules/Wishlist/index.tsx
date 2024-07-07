"use client";
import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "../Footer";
import Layout from "@/shared/Layout";
import { gilroyMedium } from "@/shared/Fonts";

const WishList = () => {
  return (
    <Layout>
      <div className="container mt-28">
        <div
          className={`flex justify-center text-2xl font-extrabold  ${gilroyMedium.className}`}
        >
          My Wishlist
        </div>

        <div className="mt-28 mb-20">
          <table className="w-full  border-[1px]  rounded-lg  ">
            <tr
              className={`text-start w-full text-xs  border-[1px]  rounded-lg text-[#999999] ${gilroyMedium.className}`}
            >
              <td className="p-2">PRODUCT</td>
              <td className="p-2">PRICE</td>
              <td className="py-2" colSpan={2}>
                STOCK STATUS
              </td>
            </tr>

            <tr>
              <td className={`flex items-center ${gilroyMedium.className}`}>
                <div>
                  <Image src="/img/image.png" height={100} width={100} alt="" />
                </div>
                <div>Hair growth Gel</div>
              </td>

              <td>
                <div className={`flex gap-1 ${gilroyMedium.className}`}>
                  <div>$14.99</div>
                  <div className="text-[#999999]">
                    <del>$20.99</del>
                  </div>
                </div>
              </td>

              <td>
                <div
                  className={`border-2 rounded-lg bg-[#2B2D421A] text-navy w-fit p-1 ${gilroyMedium.className}`}
                >
                  {" "}
                  In Stock
                </div>
              </td>

              <td>
                <div className="flex justify-center items-center gap-3">
                  <div
                    className={`border-2  rounded-full px-10 py-4 bg-navy text-white font-bold ${gilroyMedium.className}`}
                  >
                    Add to Cart
                  </div>
                  <div className="border-2 rounded-full p-3">
                    <Image
                      className="h-4 w-4"
                      src="/img/cross.png"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className={`flex items-center ${gilroyMedium.className}`}>
                <div>
                  <Image
                    src="/img/derox-herbal-tea-product.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div>Detox</div>
              </td>

              <td>
                <div className={`flex  ${gilroyMedium.className}`}>
                  <div>$45.00</div>
                </div>
              </td>

              <td>
                <div
                  className={`border-2 rounded-lg bg-[#2B2D421A] text-navy w-fit p-1 ${gilroyMedium.className}`}
                >
                  {" "}
                  In Stock
                </div>
              </td>

              <td>
                <div className="flex justify-center items-center gap-3">
                  <div
                    className={`border-2  rounded-full px-10 py-4 bg-navy text-white font-bold  ${gilroyMedium.className}`}
                  >
                    Add to Cart
                  </div>
                  <div className="border-2 rounded-full p-3">
                    <Image
                      className="h-4 w-4"
                      src="/img/cross.png"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td className={`flex items-center ${gilroyMedium.className}`}>
                <div>
                  <Image
                    src="/img/tea-tree-product.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div>Tea Tree Mint</div>
              </td>

              <td>
                <div className={`flex items-center ${gilroyMedium.className}`}>
                  <div>$09.00</div>
                </div>
              </td>

              <td>
                <div
                  className={`border-2 rounded-lg bg-[#EA4B4833] text-[#EA4B48] w-fit p-1 ${gilroyMedium.className}`}
                >
                  Out of Stock
                </div>
              </td>

              <td>
                <div className="flex justify-center items-center gap-3">
                  <div
                    className={`border-2  rounded-full px-10 py-4 bg-[#F2F2F2] text-[#B3B3B3] font-bold ${gilroyMedium.className}`}
                  >
                    Add to Cart
                  </div>
                  <div className="border-2 rounded-full p-3">
                    <Image
                      className="h-4 w-4"
                      src="/img/cross.png"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                </div>
              </td>
            </tr>

            <tr className="border-2 w-full"></tr>

            <tr>
              <td
                className={`flex items-center gap-3 p-6 ${gilroyMedium.className}`}
              >
                <div className="text-lg font-bold">share:</div>

                <FaFacebook size={20} color="#2B2D42" />

                <AiOutlineTwitter size={20} color="#4D4D4D" />
                <FaPinterestP size={20} color="#4D4D4D" />
                <FaInstagram size={20} color="#4D4D4D" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default WishList;
