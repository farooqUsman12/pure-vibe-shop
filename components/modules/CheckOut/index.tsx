import { Checkbox } from "antd";
import Image from "next/image";
import React from "react";
import Footer from "../Footer";
import { gilroyMedium } from "@/shared/Fonts";
import Layout from "@/shared/Layout";

const CheckOutPage = () => {
  return (
    <Layout>
      <div className="container mt-32 ">
        <div className="text-xl font-extrabold">Billing Information</div>

        <div className="grid grid-cols-1 gap-3 w-full mb-32 md:grid-cols-4">
          <div className="col-span-3  ">
            <div className="flex flex-col md:flex-row ">
              <div className={`p-3 w-full ${gilroyMedium.className}`}>
                <div className="text-sm">First name</div>
                <div className="border-2 rounded-lg w-full p-2 ">
                  <input
                    className=" border-none outline-none"
                    type="text"
                    id="message"
                    placeholder="Your first name"
                  />
                </div>
              </div>

              <div className={`p-3 w-full  ${gilroyMedium.className}`}>
                <div className="text-sm">Last name</div>
                <div className="border-2 rounded-lg w-full p-2 ">
                  <input
                    className=" border-none outline-none"
                    type="text"
                    id="message"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className={`p-3 w-full ${gilroyMedium.className}`}>
                <div className="text-sm ">Company Name (optional)</div>
                <div className="border-2 rounded-lg p-2 w-full  ">
                  <input
                    className=" border-none outline-none "
                    type="text"
                    id="message"
                    placeholder="Company name"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:flex-row">
              <div className={`p-3 w-full ${gilroyMedium.className}`}>
                <div className="text-sm ">Street Address</div>
                <div className="border-2 rounded-lg  p-2">
                  <input
                    className=" border-none outline-none"
                    type="text"
                    id="message"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full  gap-2 md:flex-row">
              <div className={`p-3 w-full md:w-fit ${gilroyMedium.className}`}>
                <div className="text-sm ">Country / Region</div>
                <div className="border-2 rounded-lg  p-2">
                  <input
                    className=" border-none outline-none"
                    type="text"
                    id="message"
                    placeholder="Selects"
                  />
                </div>
              </div>

              <div className={`p-3 w-full  md:w-fit ${gilroyMedium.className}`}>
                <div className="text-sm ">States</div>
                <div className="border-2 rounded-lg  p-2">
                  <input
                    className=" border-none outline-none"
                    type="text"
                    id="message"
                    placeholder="Selects"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col  gap-2 md:flex-row">
              <div className={`p-3 w-full ${gilroyMedium.className}`}>
                <div className="text-sm ">Email</div>
                <div className="border-2 rounded-lg  p-2">
                  <input
                    className=" border-none outline-none"
                    type="text"
                    id="message"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className={`p-3 w-full ${gilroyMedium.className}`}>
                <div className="text-sm ">Phone</div>
                <div className="border-2 rounded-lg  p-2">
                  <input
                    className=" border-none outline-none"
                    type="text"
                    id="message"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>

            <div className={`flex gap-2 p-3 ${gilroyMedium.className}`}>
              <div>
                <Checkbox />
              </div>
              <div>Ship to a different address</div>
            </div>

            <div className="border-b-2 w-full"></div>

            <div
              className={`mt-3 text-2xl font-bold p-3 ${gilroyMedium.className}`}
            >
              Additional Info
            </div>

            <div className="p-3 text-sm font-black">Order Notes (Optional)</div>

            <div className="border-2 rounded-lg p-4 mt-4">
              <textarea className="w-full border-none outline-none text-[#999999]">
                Notes about your order, e.g. special notes for delivery
              </textarea>
            </div>
          </div>

          <div
            className={`col-span-1 mt-10 border-2 h-fit p-4 rounded-lg ${gilroyMedium.className} `}
          >
            <div className="text-xl font-bold">Order Summery</div>

            <div className="flex justify-between mt-3 ">
              <div className="flex items-center text-sm font-black gap-2">
                <Image
                  className="h-10 w-10"
                  src="/img/hair-gel-product.jpeg"
                  height={100}
                  width={100}
                  alt=""
                />
                <div>Hair growth Gel</div>
                <div>x5</div>
              </div>

              <div className="flex items-center text-sm font-black">$70.00</div>
            </div>

            <div className="flex justify-between mt-3 ">
              <div className="flex items-center text-sm font-black gap-2">
                <Image
                  className="h-10 w-10"
                  src="/img/derox-herbal-tea-product.png"
                  height={100}
                  width={100}
                  alt=""
                />
                <div>Detox</div>
                <div>x1</div>
              </div>

              <div className="flex items-center text-sm font-black">$14.00</div>
            </div>

            <div className="mt-6 flex justify-between p-4">
              <div className="text-sm font-bold text-[#4D4D4D]">Subtotal:</div>
              <div className="text-sm font-black">$84.00</div>
            </div>
            <div className="border-b-2"></div>

            <div className="flex justify-between p-4 ">
              <div className="text-sm font-bold text-[#4D4D4D]">Shipping:</div>
              <div className="text-sm font-black">Free</div>
            </div>
            <div className="border-b-2"></div>

            <div className="flex justify-between p-4 ">
              <div className="text-base text-[#4D4D4D] font-bold">Total:</div>
              <div className="text-lg font-black">$84.00</div>
            </div>

            <div className="mt-4 text-[#1A1A1A] text-lg font-extrabold">
              Payment Method
            </div>

            <div className="flex gap-2">
              <input type="radio" />
              <div>Cash on Delivery</div>
            </div>

            <div className="flex gap-2">
              <input type="radio" />
              <div>Paypal</div>
            </div>

            <div className="flex gap-2">
              <input type="radio" />
              <div>Amazon Pay</div>
            </div>

            <div className="mt-5 border-2 rounded-full w-full text-center text-base p-3 bg-navy text-white font-bold">
              Place Order
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckOutPage;
