import { gilroyBold, gilroyLight, gilroySemiBold } from "@/shared/Fonts";
import React from "react";
import Footer from "../Footer";

const Error = () => {
  return (
    <div>
      <div className="flex flex-col  justify-center items-center w-screen h-screen">
        <div
          className={` text-9xl text-center  font-black text-navy ${gilroyBold.className}`}
        >
          404
        </div>
        <div
          className={` mt-3 text-4xl text-center  font-black text-[#242331] ${gilroyBold.className}`}
        >
          Page Not Found
        </div>
        <div
          className={`mt-3 font-medium  text-xl text-center  text-[#797979] ${gilroyLight.className}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
        </div>
        <div
          className={`font-medium  text-xl text-center   text-[#797979] ${gilroyLight.className}`}
        >
          congue pretium faucibus leo nisl nulla pharetra nullam.
        </div>

        <div className="mt-6 px-6 border-2 border-navy p-3 bg-navy text-white rounded-xl">
          Homepage
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
