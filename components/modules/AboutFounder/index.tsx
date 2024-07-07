/* eslint-disable react/no-unescaped-entities */
import { gilroySemiBold } from "@/shared/Fonts";
import React, { useState } from "react";
import About from "./designs/About";
import { motion } from "framer-motion";
import EventssPage from "@/app/eventss/page";


const AboutFounder = () => {
  const [selectedTab, setSelectedTab] = useState("about");

  const handleTabChange = (tab:any) => {
    setSelectedTab(tab);
  };

  return (
    <div className="container mt-16 mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center gap-8 py-4"
      >
        <div
          className={`text-lg  rounded-xl ${
            selectedTab === "about"
              ? "bg-red text-white"
              : "bg-[#F9F9F9] text-black"
          } px-4 py-3 ${gilroySemiBold.className}`}
          onClick={() => handleTabChange("about")}
          style={{ cursor: "pointer" }}
        >
          About Founder
        </div>
        <div
          className={`text-lg ${
            selectedTab === "events"
              ? "bg-red text-white"
              : "bg-[#F9F9F9] text-black"
          } rounded-xl border-2 border-white 
          px-10 py-3 ${gilroySemiBold.className}`}
          onClick={() => handleTabChange("events")}
          style={{ cursor: "pointer" }}
        >
          Events
        </div>
      </motion.div>
      {selectedTab === "about" && <About />}
      {selectedTab === "events" && (
        <div>
          <EventssPage />
        </div>
      )}
    </div>
  );
};

export default AboutFounder;
