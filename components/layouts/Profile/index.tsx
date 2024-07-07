"use client";
import { RootState } from "@/redux/store";
import Layout from "@/shared/Layout";
import { UserData } from "@/types/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from "react-redux";

const CustomerProfile = () => {
  const data = useSelector((state: RootState) => state.users.user);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    setUser(data);
  }, [data]);

  const handleChange = (key: keyof UserData, value: string) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  return (
    <Layout>
      <div className="bg-[#F9F9FC] h-auto pb-36">
        <div className="container">
          <div className="font-extrabold text-lg  px-36 py-5">
            <div className="text-2xl">Customer</div>
            <div className="flex mt-2 gap-3 text-sm items-center">
              <div>Dashboard</div>
              <div>
                <FaChevronRight color="#A3A9B6" />
              </div>
              <div className="text-[#667085]">Profile</div>
            </div>
          </div>

          <div className=" px-28">
            <div className="bg-[#FFFFFF]  rounded-lg mt-4 p-6">
              <div className="flex justify-between  w-full items-center  text-[#6F767E] font-extrabold ">
                <div className="text-left text-[#45464E]">Profile</div>

                <div className="text-center px-20 text-white py-2 rounded-lg bg-[#2B2D42]">
                  Update
                </div>
              </div>

              <div className="grid grid-cols-3 w-full mt-10   text-[#6F767E] font-extrabold">
                <div className="col-span-1 w-full">
                  <div className="flex flex-col w-full">
                    <div className=" text-[#5E6366] font-bold">First Name</div>
                    <div className="mt-2 flex items-center gap-4 px-3 py-1  w-full bg-[#EFF1F999] rounded-lg">
                      <div>
                        <Image
                          className="h-5 w-auto font-bold"
                          src="/img/pro.svg"
                          height={500}
                          width={500}
                          alt=""
                        />
                      </div>

                      <input
                        className="w-full py-2  rounded-lg text-black bg-[#EFF1F999] border-none outline-none"
                        type="text"
                        placeholder="Jay"
                        value={user?.firstName}
                        onChange={(e) =>
                          handleChange("firstName", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full mt-4">
                    <div className=" text-[#5E6366] font-bold">Last Name</div>
                    <div className="mt-2 flex items-center gap-4 px-3 py-1  w-full bg-[#EFF1F999] rounded-lg">
                      <div>
                        <Image
                          className="h-5 w-auto font-bold"
                          src="/img/pro.svg"
                          height={500}
                          width={500}
                          alt=""
                        />
                      </div>

                      <input
                        className="w-full py-2  rounded-lg text-black bg-[#EFF1F999] border-none outline-none"
                        type="text"
                        placeholder="Hargudson"
                        value={user?.lastName}
                        onChange={(e) =>
                          handleChange("lastName", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full mt-4">
                    <div className=" text-[#5E6366] font-bold">Email</div>
                    <div className="mt-2 flex items-center gap-4 px-4 py-1  bg-[#EFF1F999] rounded-lg">
                      <div>
                        <Image
                          className="h-5 w-auto font-bold"
                          src="/img/Message.svg"
                          height={500}
                          width={500}
                          alt=""
                        />
                      </div>

                      <input
                        className="w-full bg-[#EFF1F999] py-2 text-black  rounded-lg border-none outline-none"
                        type="text"
                        placeholder="Jayhargudson@gmail.com"
                        value={user?.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full mt-4">
                    <div className=" text-[#5E6366] font-bold">
                      Phone Number
                    </div>
                    <div className="mt-2 flex items-center gap-2 ">
                      <div className="w-[30%] flex items-center gap-4 px-3 py-2   bg-[#EFF1F999] rounded-lg">
                        <input
                          className="w-full bg-[#EFF1F999]  text-black  rounded-lg border-none outline-none"
                          type="number"
                          placeholder="+1"
                        />

                        <div>
                          <FaAngleDown />
                        </div>
                      </div>

                      <div className="w-[70%]">
                        <input
                          className="w-full bg-[#EFF1F999] py-2 px-2 text-black  rounded-lg border-none outline-none"
                          type="text"
                          placeholder="08065650633"
                          value={user?.phoneNumber}
                          onChange={(e: any) => setUser(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full mt-4">
                    <div className=" text-[#5E6366] font-bold">Address</div>
                    <div className="mt-2 flex items-center gap-4 px-4 py-1  bg-[#EFF1F999] rounded-lg">
                      <div>
                        <Image
                          className="h-5 w-auto font-bold"
                          src="/img/Location.svg"
                          height={500}
                          width={500}
                          alt=""
                        />
                      </div>

                      <input
                        className="w-full bg-[#EFF1F999] py-2 text-black  rounded-lg border-none outline-none"
                        type="text"
                        placeholder="No. 93 Skyfield Apartments"
                        value={user?.address}
                        onChange={(e: any) => setUser(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full mt-4">
                    <div className=" text-[#5E6366] font-bold">City</div>
                    <div className="mt-2 flex items-center gap-4 px-4 py-1  bg-[#EFF1F999] rounded-lg">
                      <input
                        className="w-full bg-[#EFF1F999] py-2 text-black  rounded-lg border-none outline-none"
                        type="text"
                        placeholder="Yaba"
                        value={user?.city}
                        onChange={(e: any) => setUser(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-3 ">
                    <div>
                      <div>
                        <div className=" text-[#5E6366] font-bold mt-4">
                          Country
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-4 px-3 py-1  w-full bg-[#EFF1F999] rounded-lg">
                        <input
                          className="w-full bg-[#EFF1F999] py-2 px-2 text-black  rounded-lg border-none outline-none"
                          type="text"
                          placeholder="USA"
                          value={user?.country}
                          onChange={(e: any) => setUser(e.target.value)}
                        />

                        <div>
                          <FaAngleDown />
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className=" text-[#5E6366] font-bold mt-4">
                        State
                      </div>

                      <div className="mt-2 flex items-center gap-4 px-3 py-1  w-full bg-[#EFF1F999] rounded-lg">
                        <input
                          className="w-full bg-[#EFF1F999] py-2 px-2 text-black  rounded-lg border-none outline-none"
                          type="text"
                          placeholder="California"
                          value={user?.state}
                          onChange={(e: any) => setUser(e.target.value)}
                        />
                        <div>
                          <FaAngleDown />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-span-2  px-3 py-1  text-black rounded-lg mx-20  relative ">
                  <Image
                    className="h-40 w-auto rounded-xl"
                    src="/img/image 1 (1).svg"
                    height={500}
                    width={500}
                    alt=""
                  />

                  <div className="absolute inset-2 left-[120px] top-4">
                    <Image
                      className=" h-6 w-auto "
                      src="/img/delete.svg"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                  <div className="absolute inset-2 left-[148px] top-4">
                    <Image
                      className=" h-6 w-auto "
                      src="/img/uplload.svg"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CustomerProfile;
