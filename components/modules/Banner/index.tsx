import { gilroyBold, gilroyMedium } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div className="bg-[#EF233C05] py-8 md:py-0 w-screen">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className="col-span-1 flex flex-col gap-6 pt-10 md:pt-20">
          <div className="text-red">E-commerce</div>
          <div className={`text-8xl ${gilroyBold.className}`}>
            It&apos;s all
            <br /> about you.
          </div>
          <div className={`text-grey font-medium ${gilroyMedium.className}`}>
            This e commerce website is a platform where you can order or <br />
            purchase everything. You can also find different items.
          </div>
          <div className={`bg-red shadow-lg  rounded-lg py-2 px-5 w-fit text-white text-grey font-medium ${gilroyMedium.className}`}>
            Explore Now
          </div>
        </motion.div>

        <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="col-span-1 hidden md:flex justify-center md:justify-end pt-10 ">
            <Image
              src="/img/banner-product.png"
              alt="Banner Product"
              width={1500}
              height={1500}
              className="h-62 md:h-[600px] w-auto z-10"
            />
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
