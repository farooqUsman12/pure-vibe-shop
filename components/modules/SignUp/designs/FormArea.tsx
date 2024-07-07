"use client";
import React, { useState } from "react";
import InputTextField from "@/components/ui/InputTextField";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { registerAction } from "@/redux/actions/userActions";

const FormArea = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    dispatch(registerAction(formData));
  };

  return (
    <form
      className="p-2 mt-14 flex flex-wrap flex-col h-screen md:p-8 md:mt-0"
      onSubmit={submitHandler}
    >
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-3xl font-extrabold text-black">
          <div>Hi there!</div>
          <div className="text-lg text-[#5F5F5F]">
            Join us to try the different experiments for the conference
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="font-extrabold text-black mb-2">Full Name</div>
              <InputTextField
                className="border-2 rounded-xl py-3"
                placeholder="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="font-extrabold text-black mb-2">Last Name</div>
              <InputTextField
                className="border-2 rounded-xl py-3"
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
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
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="receiveUpdates"
              checked={formData.receiveUpdates}
              onChange={handleChange}
            />
            <div className="text-base font-extrabold text-[#5F5F5F]">
              I want to receive updates about Pure vibe
            </div>
          </div>
          <button
            type="submit"
            className="text-center border-2 w-full font-extrabold py-4 rounded-xl bg-navy text-white"
          >
            Create Account
          </button>
          <div className="flex items-center mx-14 py-6">
            <div className="border-b-[1px] border-[#AEAEAE] w-full"></div>
            <div className="text-center mx-3 text-black font-extrabold">or</div>
            <div className="border-b-[1px] w-full border-[#AEAEAE]"></div>
          </div>
          <div className="flex items-center justify-center gap-3 border-2 font-extrabold py-3 rounded-xl text-black">
            <div>
              <FcGoogle size={30} />
            </div>
            <div>Log In with Google</div>
          </div>
          <div className="flex items-center gap-3 text-[#5F5F5F]">
            <div>Already have an account?</div>
            <Link href="/sign-in" className="text-[#EF233C] font-semibold">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormArea;
