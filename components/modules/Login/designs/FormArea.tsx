"use client";
import React, { useState } from "react";
import InputTextField from "@/components/ui/InputTextField";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { loginAction } from "@/redux/actions/userActions";
import { useDispatch } from "react-redux";

const FormArea = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    receiveUpdates: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginAction(formData));
  };

  return (
    <form className="p-8 flex flex-col h-screen" onSubmit={submitHandler}>
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-3xl font-extrabold text-black">
          <div>Hi there!</div>
          <div className="text-lg text-[#5F5F5F]">
            Join us to try the different experiments for the conference
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <div>
            <div className="font-extrabold text-black mb-2">Email</div>
            <InputTextField
              className="border-2 rounded-xl py-3"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="font-extrabold text-black mb-2">Password</div>
            <InputTextField
              className="border-2 rounded-xl py-3"
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-between text-[#5F5F5F] text-base font-bold">
            <div className="flex items-center gap-3 ">
              <input
                type="checkbox"
                name="receiveUpdates"
                checked={formData.receiveUpdates}
                onChange={handleChange}
              />
              <div>Remember Me</div>
            </div>
            <div>Forget Password</div>
          </div>
          <button
            type="submit"
            className="text-center border-2 w-full font-extrabold py-4 rounded-xl bg-navy text-white"
          >
            Login
          </button>
          <div className="flex items-center mx-14 py-6">
            <div className="border-b-[1px] border-[#AEAEAE] w-full"></div>
            <div className="text-center mx-3 text-black font-extrabold">or</div>
            <div className="border-b-[1px] w-full border-[#AEAEAE]"></div>
          </div>
          <div className="flex items-center gap-3 text-[#5F5F5F]">
            <div>Haven&apos;t sign up?</div>
            <Link href="/sign-up" className="text-[#EF233C] font-semibold">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormArea;
