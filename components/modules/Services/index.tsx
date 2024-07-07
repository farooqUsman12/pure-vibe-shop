import React from "react";
import Image from "next/image";
import { gilroyMedium } from "@/shared/Fonts";
import { motion } from "framer-motion"

const Services = () => {
  return (
    <div className="container">
      <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="flex flex-col justify-center items-center gap-6 mt-8 py-4 sm:tex-center">
        <div className=" text-red text-lg tracking-[6.25px] font-medium">BEST SERVICE</div>
        <div className=" text-black text-5xl font-semibold">
          Unique Selling Points
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-around gap-2 mt-8 py-4">

        
        <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className=" flex flex-col justify-center items-center gap-2">
          <div className=" w-fit p-3 shadow-md">
            <Image
              className="h-14 w-14 "
              src="/img/bag-product.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="text-xl font-extrabold">Sustainable Choices</div>
          <div className={`text-grey font-medium ${gilroyMedium.className}`}>
            Explore eco-friendly items.
          </div>
        </motion.div>

        <motion.div  initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className="flex flex-col justify-center items-center gap-2">
          <div className=" w-fit p-3 shadow-md">
            <Image
              className="h-14 w-14 "
              src="/img/car-product.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="text-xl font-extrabold">Express Delivery</div>
          <div className={`text-grey font-medium ${gilroyMedium.className}`}>
          Speedy shipping to your door.
          </div>
        </motion.div>
        

        <motion.div initial={{x:  "7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className=" flex flex-col justify-center items-center gap-2">
         
          <div className=" w-fit p-3 shadow-md">
            <Image
              className="h-14 w-14"
              src="/img/box-product.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="text-xl font-extrabold">Easy Returns</div>
          <div className={`text-grey font-medium ${gilroyMedium.className}`}>
          Hassle-free return policy.
          </div>
        </motion.div>

        <motion.div initial={{x:  "7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className=" flex flex-col justify-center items-center gap-2">
          <div className=" w-fit p-3 shadow-md">
            <Image
              className="h-14 w-14"
              src="/img/help-product.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="text-xl font-extrabold">Swift Support</div>
          <div className={`text-grey font-medium ${gilroyMedium.className}`}>
          Assistance at your fingertips.
          </div>
        </motion.div>
        

      </div>
    </div>
  );
};

export default Services;
