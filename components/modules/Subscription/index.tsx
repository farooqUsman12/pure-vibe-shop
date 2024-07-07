"use client";
import React from "react";
import Layout from "@/shared/Layout";
import PricingPlan from "../PricingPlan";
import { gilroyLight, gilroySemiBold } from "@/shared/Fonts";
import { motion } from "framer-motion"

const Subscription = () => {
  return (
    <Layout currentPage="Subscription">
      <div className="container mt-16 mb-28">
        <PricingPlan noTitle />
        <div className={`flex flex-col text-[#797979] text-base font-extrabold  ${gilroyLight.className} md:p-20`}>
          <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}  className={`text-4xl text-[#242331] ${gilroySemiBold.className}`}>
            Is Standard Plan a good choice for me?
          </motion.div>
          <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}  className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </motion.div>
          <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} >
            Lorem Ipsum has been the industry standard dummy text ever since the
          </motion.div>
          <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} >
            1500s, when an unknown printer took a galley .
            </motion.div>

          <div className="mt-8 flex flex-col gap-8 text-[#797979]">
            <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}  className="flex gap-2">
              <div className="text-black font-extrabold">01.</div>
              <div>There are many variations of passages</div>
            </motion.div>

            <motion.div initial={{x:  "7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}  className="flex gap-2">
              <div className="text-black font-extrabold">02.</div>
              <div>Majority have suffered alteration in some form.</div>
            </motion.div>

            <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}  className="flex gap-2">
              <div className="text-black font-extrabold">03.</div>
              <div>If you are going to use a passage of Lorem Ipsum.</div>
            </motion.div>

            <motion.div initial={{x:  "7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }}  className="flex gap-2">
              <div className="text-black font-extrabold">04.</div>
              <div>It uses a dictionary of over 200 Latin words, combined.</div>
            </motion.div>

            <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}  className="mt-3">
              <div>
                There are many variations of passages of Lorem Ipsum available,
                but the
              </div>
              <div>majority have suffered alteration in some form.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscription;
