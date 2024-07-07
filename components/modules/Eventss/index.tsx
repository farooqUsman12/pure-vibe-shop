"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { gilroyLight, gilroySemiBold } from '@/shared/Fonts';



const Eventss = () => {
  return (
    <div className="container mb-96 ">
    <div className="text-center mt-16 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`text-5xl ${gilroySemiBold.className}`}
      >
        Events
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      </motion.div>
    </div>

    <div className="flex flex-col items-center gap-64  ">
      <div className="grid grid-cols-1 mt-10 gap-40 md:grid-cols-3">
        <motion.div
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="  border-2  rounded-xl bg-[#FFEDFE] border-[#FFEDFE] w-full h-96 "
        >
          <div>
            <Image
              className=" w-fit h-96 mt-16 rounded-xl md:m-16"
              src="/img/events.png"
              height={500}
              width={500}
              alt=""
            />

            <div className="px-20 text-2xl font-black">
              Pixel Perfect Showcase
            </div>

            <div className="grid grid-cols-2 px-20">
              <div className="flex items-center gap-2 mt-2 font-black">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/clock.png"
                    height={500}
                    width={500}
                    alt=""
                  />{" "}
                </div>
                <div>09:00 - 12:00</div>
              </div>

              <div className="flex items-center gap-2 font-black">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/map-pin.png"
                    height={500}
                    width={500}
                    alt=""
                  />{" "}
                </div>
                <div>Newburgh, New York</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="mt-20  border-2  rounded-xl bg-[#FFE7E3] border-[#FFEDFE] w-full h-96 md:mt-0"
        >
          <div>
            <Image
              className=" w-fit h-96 mt-16 rounded-xl md:m-16"
              src="/img/events.png"
              height={500}
              width={500}
              alt=""
            />

            <div className="px-20 text-2xl font-black">
              Pixel Perfect Showcase
            </div>

            <div className="grid grid-cols-2 px-20">
              <div className="flex items-center gap-2 mt-2 font-black">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/clock.png"
                    height={500}
                    width={500}
                    alt=""
                  />{" "}
                </div>
                <div>09:00 - 12:00</div>
              </div>

              <div className="flex items-center gap-2 font-black">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/map-pin.png"
                    height={500}
                    width={500}
                    alt=""
                  />{" "}
                </div>
                <div>Newburgh, New York</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-7vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="  border-2  rounded-xl bg-[#FFEDFE] border-[#FFEDFE] w-full h-96 "
        >
          <div>
            <Image
              className=" w-fit h-96 mt-16 rounded-xl md:m-16"
              src="/img/events.png"
              height={500}
              width={500}
              alt=""
            />

            <div className="px-20 text-2xl font-black">
              Pixel Perfect Showcase
            </div>

            <div className="grid grid-cols-2 px-20">
              <div className="flex items-center gap-2 mt-2 font-black">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/clock.png"
                    height={500}
                    width={500}
                    alt=""
                  />{" "}
                </div>
                <div>09:00 - 12:00</div>
              </div>

              <div className="flex items-center gap-2 font-black">
                <div>
                  <Image
                    className="h-4 w-4"
                    src="/img/map-pin.png"
                    height={500}
                    width={500}
                    alt=""
                  />{" "}
                </div>
                <div>Newburgh, New York</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
  )
}

export default Eventss