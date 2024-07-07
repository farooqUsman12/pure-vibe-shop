import { gilroyBold, gilroyMedium } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"

const OurValue = () => {
  return (
    <div className="mt-36 ">
      <motion.div initial={{opacity: 0}} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}  className={`mt-16 text-4xl font-black text-[#2F2F2F] text-center ${gilroyBold.className} md:text-5xl`}>Our Values</motion.div>

      <div className="flex flex-col mt-6 gap-20 md:p-24 md:mt-0">
        <motion.div initial={{x:  "-7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className="grid grid-cols-1 gap-10 md:grid-cols-3 ">
          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                className="h-14 w-14"
                src="/img/innovation.png"
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className={`text-[#2F2F2F] text-2xl font-extrabold mt-2 ${gilroyBold.className}`}>
              innovation
            </div>

            <div className={`flex flex-col  text-[#808080] mt-2 ${gilroyMedium.className}`}>
              <div>Building an enterprise does not need</div>
              <div> nightmare or cost your thousands</div>
              <div>Felix is purpose built.</div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                className="h-14 w-14"
                src="/img/growth.png"
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className={`text-[#2F2F2F] text-2xl font-extrabold mt-2 ${gilroyBold.className}`}>
              Growth
            </div>

            <div className={`flex flex-col text-center text-[#808080] mt-2 ${gilroyMedium.className}`}>
              <div>Building an enterprise does not need</div>
              <div> nightmare or cost your thousands</div>
              <div>Felix is purpose built.</div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                className="h-14 w-14"
                src="/img/owner-ship.png"
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className={`text-[#2F2F2F] text-2xl font-extrabold mt-2 ${gilroyBold.className}`}>
              Ownership
            </div>

            <div className={`flex flex-col text-center text-[#808080] mt-2 ${gilroyMedium.className}`}>
              <div>Building an enterprise does not need</div>
              <div> nightmare or cost your thousands</div>
              <div>Felix is purpose built.</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{x:  "7vw"}} whileInView={{ x: 0 }} transition={{ duration: 1 }} className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                className="h-14 w-14"
                src="/img/team-work.png"
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className={`text-[#2F2F2F] text-2xl text-center font-extrabold mt-2 ${gilroyBold.className}`}>
              Team Work
            </div>

            <div className={`flex flex-col text-center text-[#808080] mt-2 ${gilroyMedium.className}`}>
              <div>Building an enterprise does not need</div>
              <div> nightmare or cost your thousands</div>
              <div>Felix is purpose built.</div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                className="h-14 w-14"
                src="/img/commitment.png"
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className={`text-[#2F2F2F] text-2xl font-extrabold mt-2 ${gilroyBold.className}`}>
              Commitment
            </div>

            <div className={`flex flex-col text-center text-[#808080] mt-2 ${gilroyMedium.className}`}>
              <div>Building an enterprise does not need</div>
              <div> nightmare or cost your thousands</div>
              <div>Felix is purpose built.</div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                className="h-14 w-14"
                src="/img/positivity.png"
                height={500}
                width={500}
                alt=""
              />
            </div>
            <div className={`text-[#2F2F2F] text-2xl font-extrabold mt-2 ${gilroyBold.className}`}>
              Positivity
            </div>

            <div className={`flex flex-col text-center text-[#808080] mt-2 ${gilroyMedium.className}`}>
              <div>Building an enterprise does not need</div>
              <div> nightmare or cost your thousands</div>
              <div>Felix is purpose built.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurValue;
