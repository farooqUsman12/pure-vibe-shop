"use client";
import { gilroySemiBold } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GetinTouch = () => {
  return (
    <div className="container mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`text-5xl text-center font-extrabold text-black ${gilroySemiBold.className} `}
      >
        Get in Touch
      </motion.div>

      <div
        className={`mt-5 flex flex-col gap-20 justify-center text-lg  text-center font-extrabold text-black ${gilroySemiBold.className} md:flex-row`}
      >
        <motion.div
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2"
        >
          <div>
            <Image
              className="w-7"
              src="/img/mail.png"
              height={500}
              width={500}
              alt=""
            />
          </div>
          <div>contact@technologycal</div>
        </motion.div>

        <motion.div
          initial={{ x: "7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-2"
        >
          <div>
            <Image
              className="w-7"
              src="/img/phone.png"
              height={500}
              width={500}
              alt=""
            />
          </div>
          <div>(011) 6543 8974 210</div>
        </motion.div>
      </div>

      <div className="mt-36 grid grid-cols-1 gap-5 px-2 md:grid-cols-2 md:px-32 md:gap-20 ">
        <motion.div
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className={` font-extrabold text-black ${gilroySemiBold.className}`}
          >
            Full Name *
          </div>
          <div className="mt-3 border-2 rounded-xl p-6">
            <input
              className="border-none outline-none "
              type="text"
              id="message"
              placeholder="John David"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className={` font-extrabold text-black ${gilroySemiBold.className}`}
          >
            Your Email *
          </div>
          <div className="mt-3 border-2 rounded-xl p-6">
            <input
              className="border-none outline-none "
              type="text"
              id="message"
              placeholder="example@yourmail.com"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 px-2 md:grid-cols-2  md:px-32 md:gap-20">
        <motion.div
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className={` font-extrabold text-black ${gilroySemiBold.className}`}
          >
            Company *
          </div>
          <div className="mt-3 border-2 rounded-xl p-6 ">
            <input
              className="border-none outline-none "
              type="text"
              id="message"
              placeholder="your company name here"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className={` font-extrabold text-black ${gilroySemiBold.className}`}
          >
            Subject *
          </div>
          <div className="mt-3 border-2 rounded-xl p-6 ">
            <input
              className="border-none outline-none "
              type="text"
              id="message"
              placeholder="how can we help"
            />
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 px-2 md:px-32 md:gap-20  ">
        <motion.div
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className={` font-extrabold text-black ${gilroySemiBold.className}`}
          >
            Message *
          </div>
          <div className="mt-3 border-2 rounded-xl p-6 w-full h-72">
            <input
              className="border-none outline-none w-full"
              type="text"
              id="message"
              placeholder="hello there,I would like to talk about how to..."
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className=" border-2 rounded-xl font-bold bg-navy w-fit px-8 py-4  text-white text-lg "
        >
          Send Message
        </motion.div>
      </div>
    </div>
  );
};

export default GetinTouch;
