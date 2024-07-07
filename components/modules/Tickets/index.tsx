"use client";
import Layout from "@/shared/Layout";

import React from "react";

const Tickets = () => {
  return (
    <Layout>
      <div className="bg-[#F9F9FC] h-auto pb-10">
        <div className="container py-10 px-80 ">
          <div className="font-extrabold text-black">Generate Ticket</div>
          <div className="flex flex-col gap-2 mx-40 mt-10 w-full">
            <div className="text-[#7d7d7e] text-lg  font-extrabold">
              Order ID{" "}
            </div>
            <div className="border-2 py-3 bg-white rounded-lg w-full">
              <input
                className="px-2 text-lg w-full border-none outline-none"
                type="text"
                id="text"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mx-40 mt-5 w-full">
            <div className="text-[#7d7d7e] text-lg  font-extrabold">
              Subject
            </div>
            <div className="border-2 py-3 bg-white rounded-lg w-full">
              <input
                className="px-2 text-lg w-full border-none outline-none"
                type="text"
                id="text"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mx-40 mt-5 w-full">
            <div className="text-[#7d7d7e] text-lg  font-extrabold">
              Details
            </div>
            <div className="border-2 py-3 bg-white rounded-lg w-full">
              <textarea
                id="floatingTextarea2"
                className="h-56 w-full px-3 text-lg border-none outline-none"
              />
            </div>

            <div className="rounded-lg bg-[#2B2D42] text-white w-fit mt-16  px-3 py-2 mx-auto font-extrabold text-center">
              Submit
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tickets;
