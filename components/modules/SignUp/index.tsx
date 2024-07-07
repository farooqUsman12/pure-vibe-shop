"use client"
import { gilroyLight, gilroySemiBold } from "@/shared/Fonts";
import Image from "next/image";
import React from "react";
import FormArea from "./designs/FormArea";
import AuthLayout from "@/shared/AuthLayout.js";

const SignUp = () => {
  return (
    <AuthLayout>
      <div className="">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center justify-center max-h-full bg-[#F8F8F8] py-20">
            <Image src="/img/sign-up.png" height={500} width={500} alt="" />
            <div className={`mt-12 text-5xl ${gilroySemiBold.className}`}>
              You will be in good company.
            </div>
            <div
              className={`mt-3 font-extrabold text-[#5F5F5F] text-2xl ${gilroyLight.className}`}
            >
              Get started with your free account today.
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Image
                className="w-16 h-fit"
                src="/img/logo-1.png"
                height={500}
                width={500}
                alt=""
              />
              <Image
                className="w-14 h-fit"
                src="/img/logo-2.png"
                height={500}
                width={500}
                alt=""
              />
              <Image
                className="w-16 h-fit"
                src="/img/logo-3.png"
                height={500}
                width={500}
                alt=""
              />
              <Image
                className="w-16 h-fit"
                src="/img/logo-4.png"
                height={500}
                width={500}
                alt=""
              />
              <Image
                className="w-16 h-fit"
                src="/img/logo-5.png"
                height={500}
                width={500}
                alt=""
              />
              <Image
                className="w-16 h-fit"
                src="/img/logo-6.png"
                height={500}
                width={500}
                alt=""
              />
            </div>
          </div>
          <div className="py-20">
            <FormArea />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
