import { gilroyBlackItalic, gilroyLight, gilroyMedium } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const PricingPlan = ({ noTitle }: any) => {
  return (
    <div className="container ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        {!noTitle && (
          <div className="text-red text-lg tracking-[6.00px] font-semibold">
            PRICING
          </div>
        )}
        <div className=" mt-8 text-black text-5xl font-semibold">
          Affordable pricing plans
        </div>
        <div
          className={`mt-8 text-[#808080] font-bold text-xl ${gilroyLight.className}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          ut id congue{" "}
        </div>
        <div className={`text-[#808080] text-xl ${gilroyLight.className}`}>
          commodo. Semper malesuada morbi adipiscing tellus posuere. Interdum.
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 md:p-20 mb-24">
        <motion.div
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" h-auto order-2 w-full shadow-md rounded-lg bg-white p-8"
        >
          <div className="p-10">
            <div className="flex items-center gap-6 ">
              <div className="flex">
                <Image
                  className="h-auto w-6"
                  src="/img/left-circle-product.png"
                  height={100}
                  width={100}
                  alt=""
                />
                <Image
                  className="h-auto w-6"
                  src="/img/half-box-product.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <div
                  className={`text-[#808080] font-extrabold text-lg  ${gilroyLight.className}`}
                >
                  For individuals
                </div>
                <div
                  className={`text-black font-extrabold text-xl  ${gilroyMedium.className}`}
                >
                  Basic
                </div>
              </div>
            </div>
            <div
              className={`mt-8 text-black font-bold text-lg ${gilroyMedium.className}`}
            >
              <div className={`font-medium ${gilroyLight.className}`}>
                Show social proof notifications to
              </div>
              <div className={`font-medium  ${gilroyLight.className}`}>
                increase leads and sales.
              </div>
            </div>
            <div
              className={`mt-6 text-6xl font-extrabold text-black ${gilroyMedium.className}`}
            >
              $9
              <span className={`text-xl  text-grey ${gilroyMedium.className}`}>
                /monthly
              </span>
            </div>
          </div>

          <div className="m-6">
            <div
              className={`border-2 p-6 font-black text-2xl  text-center rounded-full bg-navy text-white  ${gilroyLight.className}`}
            >
              Get started
            </div>
          </div>
          <div className="m-6">
            <div
              className={`border-2 p-6 font-black text-2xl  text-center rounded-full bg-navy text-white  ${gilroyLight.className}`}
            >
              Your already subscribed
            </div>
          </div>
          <div className="m-6">
            <div
              className={`border-2 p-6 font-black text-2xl  text-center rounded-full border-navy text-navy  ${gilroyLight.className}`}
            >
              Cancel your subscription
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className=" h-auto md:order-2 w-full shadow-md rounded-lg bg-[#F7F8F9] p-8"
        >
          <div className="flex flex-col gap-3 justify-center  mt-14 p-4">
            <div
              className={`text-black font-extrabold text-xl  ${gilroyMedium.className}`}
            >
              What’s included
            </div>
            <div className="flex gap-3">
              <div>
                <Image
                  className="h-6 w-6"
                  src="/img/check-circle-icon.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div
                className={`text-black font-extrabold text-lg  ${gilroyLight.className}`}
              >
                All analytics features
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <Image
                  className="h-6 w-6"
                  src="/img/check-circle-icon.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div
                className={`text-black font-extrabold text-lg  ${gilroyLight.className}`}
              >
                Up to 250,000 tracked visits
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <Image
                  className="h-6 w-6"
                  src="/img/check-circle-icon.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div
                className={`text-black font-extrabold text-lg  ${gilroyLight.className}`}
              >
                Normal support
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <Image
                  className="h-6 w-6"
                  src="/img/check-circle-icon.png"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div
                className={`text-black font-extrabold text-lg  ${gilroyLight.className}`}
              >
                Up to 3 team members
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPlan;
