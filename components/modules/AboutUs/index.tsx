"use client";
import Image from "next/image";
import React from "react";
import OurValue from "../OurValues";
import SocialMedia from "../SocialMedia";
import Layout from "@/shared/Layout";
import {
  gilroyBold,
  gilroyLight,
  gilroyMedium,
  gilroySemiBold,
} from "@/shared/Fonts";
import { motion } from "framer-motion";

const AboutUsPage = () => {
  return (
    <Layout currentPage="About Us">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mt-20 "
        >
          <div className={`text-5xl ${gilroySemiBold.className}`}>About Us</div>
          <div
            className={`text-[#808080] mt-3 text-base ${gilroyLight.className}`}
          >
            Lorem Ipsum is simply dummy text of the printing
          </div>
          <div className={`text-[#808080]  text-base ${gilroyLight.className}`}>
            and typesetting industry.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 mt-24 md:grid-cols-2 ">
          <motion.div
            initial={{ x: "-7vw" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="p-6"
          >
            <Image
              className="w-full rounded-xl"
              src="/img/about.jpg"
              height={500}
              width={500}
              alt=""
            />

            <div className="grid grid-cols-1  mt-4 md:grid-cols-3 md:gap-3 ">
              <div className="col-span-1 h-[200px] text-center  rounded-xl  bg-[#EF233C] text-white  ">
                <div className="mt-16 text-5xl text-center font-extrabold">
                  500K
                </div>
                <div className="text-[14px] gap-2 font-black text-center ">
                  Daily Active Coustmer
                </div>
              </div>

              <div className="col-span-2 mt-4 md:mt-0">
                <Image
                  className="rounded-xl"
                  src="/img/photo1.jpg"
                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "7vw" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="pl-10 pt-6 ">
              <div
                className={`text-3xl font-extrabold text-[#2F2F2F] ${gilroyMedium.className}`}
              >
                We are on a mission to
              </div>
              <div
                className={`text-3xl font-extrabold text-[#2F2F2F] ${gilroyMedium.className}`}
              >
                give people quality stuff
              </div>
              <div
                className={`mt-4 text-sm text-[#808080] ${gilroyMedium.className}`}
              >
                Building an enterprise level site does not need nightmare or
                cost your thousands. Felix is purpose built for ease of use and
                completxability to create even the most powerful of products.
              </div>

              <div className="border-b-2 w-full mt-4 "></div>

              <div className="flex mt-6 gap-3">
                <Image
                  className=" h-24 w-auto"
                  src="/img/icon-product.png"
                  height={500}
                  width={500}
                  alt=""
                />
                <div className="flex flex-col p-2">
                  <div
                    className={`text-[#2F2F2F] text-2xl font-extrabold ${gilroyBold.className}`}
                  >
                    How technology started
                  </div>
                  <div
                    className={`text-[#808080] text-sm font-extrabold   ${gilroyLight.className}`}
                  >
                    Building an enterprise does not need
                  </div>
                  <div
                    className={`text-[#808080] text-sm font-extrabold ${gilroyLight.className}`}
                  >
                    your thousands.
                  </div>
                </div>
              </div>

              <div className="flex mt-4 gap-3">
                <Image
                  className=" h-24 w-auto"
                  src="/img/setting-icon.png"
                  height={500}
                  width={500}
                  alt=""
                />
                <div className="flex flex-col p-2">
                  <div
                    className={`text-[#2F2F2F] text-2xl font-extrabold ${gilroyBold.className}`}
                  >
                    Endless Possibilities
                  </div>
                  <div
                    className={` text-[#808080] text-sm font-extrabold ${gilroyLight.className}`}
                  >
                    Building an enterprise does not need
                  </div>
                  <div
                    className={`text-[#808080] text-sm font-extrabold ${gilroyLight.className}`}
                  >
                    your thousands.
                  </div>
                </div>
              </div>

              <div className="border-2 w-fit p-4 mt-5 rounded-xl px-8 bg-navy text-white  text-xl">
                Explore Now
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`mt-16 text-5xl font-black text-[#2F2F2F] text-center ${gilroyBold.className}`}
        >
          <div> Businesses all over the world trust </div>
          <div>Buffer to build their brand</div>
        </motion.div>

        <div className="grid grid-cols-1 mt-16 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center"
          >
            <div
              className={`text-5xl font-black text-[#EF233C]  ${gilroyBold.className}`}
            >
              10 years
            </div>
            <div
              className={`text-[#808080] text-sm font-black mt-2 ${gilroyLight.className}`}
            >
              In Business
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center"
          >
            <div
              className={`text-5xl font-black text-[#EF233C]  ${gilroyBold.className}`}
            >
              75,000+
            </div>
            <div
              className={`text-[#808080] text-sm font-black mt-2 ${gilroyLight.className}`}
            >
              Customers
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center"
          >
            <div
              className={`text-5xl font-black text-[#EF233C]  ${gilroyBold.className}`}
            >
              100k+
            </div>
            <div
              className={`text-[#808080] text-sm font-black mt-2 ${gilroyLight.className}`}
            >
              Monthly Blog Readers
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center"
          >
            <div
              className={`text-5xl font-black text-[#EF233C]  ${gilroyBold.className}`}
            >
              100k+
            </div>
            <div
              className={`text-[#808080] text-sm font-black mt-2 ${gilroyLight.className}`}
            >
              Social Followers
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 mt-28 gap-6 md:grid-cols-4">
          <motion.div
            initial={{ x: "-7vw" }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            className="col-span-2 px-24 py-6"
          >
            <div
              className={`text-[#2F2F2F] text-4xl font-black ${gilroyBold.className}`}
            >
              Our Mission
            </div>

            <div
              className={`mt-6 text-[#808080] font-bold ${gilroyLight.className}`}
            >
              <div>
                Building an enterprise level site does not need nightmare or
                cost your thousands. Felix is purpose built for ease of use and
                complete ability to create.
              </div>
            </div>

            <div
              className={`flex flex-col gap-3 mt-4  ${gilroyMedium.className}`}
            >
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/tick.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div>Posting to social media, blogs, and messengers</div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/tick.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div>Working with images and videos</div>
              </div>

              <div className="flex items-center gap-2">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/tick.png"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div>The Future of Writing Blog Articles</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="col-span-1  "
          >
            <div>
              <Image
                className="w-full h-auto rounded-xl "
                src="/img/pic.jpg"
                height={500}
                width={500}
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="col-span-1"
          >
            <Image
              className="w-full h-auto rounded-xl"
              src="/img/photo-2.jpg"
              height={500}
              width={500}
              alt=""
            />
          </motion.div>
        </div>

        <OurValue />
        <SocialMedia />
      </div>
    </Layout>
  );
};

export default AboutUsPage;
