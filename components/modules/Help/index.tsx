"use client";
import Layout from "@/shared/Layout";
import Image from "next/image";
import React from "react";

const Help = () => {
  return (
    <Layout>
      <div className="bg-[#F9F9FC] h-auto py-8">
        <div className="container pb-24">
          <div className="flex justify-between items-center mt-10 px-6">
            <div className="text-black font-extrabold">Help and Support</div>
            <div className="flex items-center gap-2">
              <div className="border-2 px-5 py-3 rounded-lg bg-[#2B2D42] text-white font-bold">
                Ticket History
              </div>
              <div className="border-2 px-5 py-3 rounded-lg bg-[#2B2D42] text-white font-bold">
                Generate Ticket
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-4xl font-extrabold text-black">
            Welcome! How can we help?
          </div>

          <div className="flex justify-center items-center px-3 gap-2 border-[1px] w-[60%] mx-auto mt-8 py-4 rounded-lg bg-white">
            <div>
              <Image
                className="h-6 w-6 "
                src="/img/search.svg"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <input
              className="w-full  text-lg border-none outline-none"
              title="Search"
              placeholder="Search"
              typeof="search"
            />
          </div>

          <div className="flex items-center gap-2 px-64 mx-auto mt-6 text-[#2B2D42] font-extrabold">
            <div>
              <Image
                className="h-6 w-6"
                src="/img/help-circle.svg"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div>Get help</div>
          </div>

          <div className="grid grid-cols-2 px-3 gap-20  w-[60%] mx-auto mt-8 py-4  ">
            <div className="bg-white shadow-sm border-[1px] rounded-lg py-16 text-[#818181]">
              <div className="flex justify-center items-center ">
                <Image
                  className="h-8 w-8 "
                  src="/img/airplay.svg"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="text-center text-lg  font-extrabold mt-3 text-[#818181]">
                Using Twist
              </div>
              <div className="text-center mt-3">
                Find answers to common questions and
                <br />
                learn the ins and outs of Twist.
              </div>
            </div>

            <div className="bg-white shadow-sm border-[1px] rounded-lg py-16 text-[#818181]">
              <div className="flex justify-center items-center ">
                <Image
                  className="h-8 w-8 "
                  src="/img/airplay.svg"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="text-center text-lg  font-extrabold mt-3 text-[#818181]">
                Using Twist
              </div>
              <div className="text-center mt-3">
                Find answers to common questions and
                <br />
                learn the ins and outs of Twist.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-64 mx-auto mt-6 text-[#2B2D42] font-extrabold">
            <div>
              <Image
                className="h-6 w-6"
                src="/img/help-circle.svg"
                height={100}
                width={100}
                alt=""
              />
            </div>
            <div>Popular Articles</div>
          </div>

          <div className="grid grid-cols-2 px-3 gap-20  w-[60%] mx-auto mt-8 py-4  ">
            <div className="bg-white shadow-sm border-[1px] rounded-lg  py-16 text-[#818181]">
              <div className="flex justify-center items-center ">
                <Image
                  className="h-8 w-8 "
                  src="/img/airplay.svg"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="text-center text-lg  font-extrabold mt-3 text-[#818181]">
                Using Twist
              </div>
              <div className="text-center mt-3">
                Find answers to common questions and
                <br />
                learn the ins and outs of Twist.
              </div>
            </div>

            <div className="bg-white shadow-sm border-[1px] rounded-lg py-16 text-[#818181]">
              <div className="flex justify-center items-center ">
                <Image
                  className="h-8 w-8 "
                  src="/img/airplay.svg"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="text-center text-lg  font-extrabold mt-3 text-[#818181]">
                Using Twist
              </div>
              <div className="text-center mt-3">
                Find answers to common questions and
                <br />
                learn the ins and outs of Twist.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
