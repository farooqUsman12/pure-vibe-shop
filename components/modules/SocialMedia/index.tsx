import { gilroyBold, gilroyLight, gilroyMedium } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mb-36 md:grid-cols-2">
      <motion.div
        initial={{ x: "-7vw" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col mt-20  md:px-28 md:mt-0"
      >
        <div className={`text-4xl font-black ${gilroyBold.className}`}>
          Connect all the social networks you love
        </div>
        <div className={`mt-3 text-[#808080] ${gilroyLight.className}`}>
          We currently support facebook, instagram, LinkedIn and Twitter. More
          to come. Felix is purpose built for ease of use and complete
          flexability.
        </div>
        <div
          className={`mt-5 border-2 border-[2B2D42]  bg-navy text-white font-bold px-5 w-fit p-3 rounded-xl ${gilroyMedium.className}`}
        >
          Get Started
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "7vw" }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        className="h-full md:w-full mt-10 md:mt-0"
      >
        <div className="flex justify-evenly">
          <div>
            <Image
              className="shadow rounded-xl h-16 w-16"
              src="/img/tweeter.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="shadow rounded-xl h-16 w-16"
              src="/img/youtube.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-around py-6">
          <div>
            <Image
              className="shadow rounded-xl h-16 w-16"
              src="/img/instagram.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="shadow rounded-xl h-16 w-16"
              src="/img/facebook.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-evenly ">
          <div>
            <Image
              className="shadow rounded-xl h-16 w-16"
              src="/img/Indeed.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div>
            <Image
              className="shadow rounded-xl h-16 w-16"
              src="/img/pinterest.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialMedia;
