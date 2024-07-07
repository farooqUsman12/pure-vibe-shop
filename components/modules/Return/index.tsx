import Layout from "@/shared/Layout";
import Image from "next/image";
import React from "react";

const Return = () => {
  return (
    <Layout>
      <div className="bg-[#F9F9FC] h-auto w-full py-8">
        <div className="container mb-28   ">
          <div className="flex justify-between items-center">
            <div className="text-black font-extrabold">Returns and Refunds</div>
            <div className="border-2 px-5 py-3 rounded-lg bg-[#2B2D42] text-white font-bold">
              New Request
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg mt-6 p-6">
            <div className="flex justify-between items-center ">
              <div className="text-black font-extrabold text-lg">
                Refund requests
              </div>
              <div className="flex items-center gap-2">
                <div className="   bg-[#EFEFEF] px-4 py-2 rounded-lg text-black font-extrabold">
                  Open requests
                </div>
                <div className="text-[#6F767E] font-extrabold rounded-lg px-4 py-2 bg-white">
                  Closed requests
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3  w-full items-center mt-10 text-[#6F767E] font-extrabold ">
              <div className="text-left">Product</div>
              <div className="text-center">Status</div>
              <div className="text-center">Date</div>
            </div>
            <div className="border-b-2 mt-4"></div>

            <div className="grid grid-cols-3 w-full items-center mt-10 text-[#6F767E] font-extrabold">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    className="h-20 w-20 rounded-xl"
                    src="/img/return1.svg"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-left text-black">
                  <div>Bento Matte 3D </div>
                  <div>Illustration</div>
                  <div className="text-[#9A9FA5]">UI design kit</div>
                </div>
              </div>
              <div className="text-center px-2 py-2 bg-[#B5E4CA] text-black rounded-xl mx-auto ">
                New request
              </div>
              <div className="text-center text-black">13 Sep</div>
            </div>

            <div className="grid grid-cols-3 w-full items-center bg-[#F4F4F4] rounded-lg p-2 mt-10 text-[#6F767E] font-extrabold">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    className="h-20 w-20 rounded-xl"
                    src="/img/return2.svg"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-left text-black">
                  <div>Bento Matte 3D </div>
                  <div>Illustration</div>
                  <div className="text-[#9A9FA5]">UI design kit</div>
                </div>
              </div>
              <div className="text-center px-2 py-2 bg-[#CABDFF] text-black rounded-xl mx-auto ">
                In progress
              </div>
              <div className="text-center text-black">12 Sep</div>
            </div>

            <div className="grid grid-cols-3 w-full items-center mt-10 text-[#6F767E] font-extrabold">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    className="h-20 w-20 rounded-xl"
                    src="/img/return3.svg"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-left text-black">
                  <div>Bento Matte 3D </div>
                  <div>Illustration</div>
                  <div className="text-[#9A9FA5]">UI design kit</div>
                </div>
              </div>
              <div className="text-center px-2 py-2 bg-[#B5E4CA] text-black rounded-xl mx-auto ">
                New request
              </div>
              <div className="text-center text-black">11 Sep</div>
            </div>

            <div className="grid grid-cols-3 w-full items-center mt-10 text-[#6F767E] font-extrabold">
              <div className="flex items-center gap-4">
                <div>
                  <Image
                    className="h-20 w-20 rounded-xl"
                    src="/img/return4.svg"
                    height={100}
                    width={100}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-left text-black">
                  <div>Bento Matte 3D </div>
                  <div>Illustration</div>
                  <div className="text-[#9A9FA5]">UI design kit</div>
                </div>
              </div>
              <div className="text-center px-2 py-2 bg-[#CABDFF] text-black rounded-xl mx-auto ">
                In progress
              </div>
              <div className="text-center text-black">10 Sep</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Return;
