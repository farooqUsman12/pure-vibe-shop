import { gilroySemiBold } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"


const PartnerBrands = () => {
  return (
    <div className="container ">
      <motion.div
      initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}  className={`text-4xl text-center font-extrabold text-black ${gilroySemiBold.className}`}
      >
        Our Partner Brands
      </motion.div>

      <div className="mt-6 p-16 flex gap-4 flex-wrap justify-around items-center">
        <motion.div initial={{y: 100}} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <Image
            className="h-9 w-28"
            src="/img/logo-1.png"
            height={1000}
            width={1000}
            alt=""
          />
        </motion.div>
        
        <motion.div initial={{y: 100}} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <Image
            className="h-20 w-20"
            src="/img/logo-2.png"
            height={1000}
            width={1000}
            alt=""
          />
        </motion.div>

        <motion.div initial={{y: 100}} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <Image
            className="h-9 w-36"
            src="/img/logo-3.png"
            height={1000}
            width={1000}
            alt=""
          />
        </motion.div>

        <motion.div initial={{y: -100}} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <Image
            className="h-9 w-32"
            src="/img/logo-4.png"
            height={1000}
            width={1000}
            alt=""
          />
        </motion.div>

        <motion.div initial={{y: -100}} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <Image
            className="h-10 w-28"
            src="/img/logo-5.png"
            height={1000}
            width={1000}
            alt=""
          />
        </motion.div>

        <motion.div initial={{y: -100}} whileInView={{ y: 0 }} transition={{ duration: 1 }}>
          <Image
            className="w-32"
            src="/img/logo-6.png"
            height={500}
            width={500}
            alt=""
          />
        </motion.div>
        
      </div>
    </div>
  );
};

export default PartnerBrands;
