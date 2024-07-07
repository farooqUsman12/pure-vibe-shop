import React, { useState } from "react";

const UserDashboardTabs = ({
  search,
  setSearch,
  activeTab,
  setActiveTab,
}: any) => {
  return (
    <div className="flex justify-between pr-24 py-10 bg-white">
      <div className="flex font-extrabold text-black text-xl items-center w-full">
        <div
          className={`w-[20%] text-center rounded-t-lg py-2 border-b-2 ${
            activeTab === "Active" ? "bg-[#F6F6F6] border-black" : ""
          }`}
          onClick={() => setActiveTab("Active")}
        >
          Active
        </div>
        <div
          className={`rounded-t-lg w-[20%] text-center py-2  border-b-2 ${
            activeTab === "Completed" ? "bg-[#F6F6F6] border-black" : ""
          }`}
          onClick={() => setActiveTab("Completed")}
        >
          Completed
        </div>
        <div
          className={`rounded-t-lg w-[20%] text-center py-2 border-b-2 ${
            activeTab === "Return"
              ? "bg-[#F6F6F6]  border-b-2 border-black"
              : ""
          }`}
          onClick={() => setActiveTab("Return")}
        >
          Return
        </div>
      </div>
      <input
        placeholder="Search"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        className="border-2 p-2 rounded-lg w-[30%]"
      />
    </div>
  );
};

export default UserDashboardTabs;
