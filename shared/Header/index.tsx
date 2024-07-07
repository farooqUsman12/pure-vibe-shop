"use client";
import DropDownUi from "@/components/ui/DropDown";
import { RootState } from "@/redux/store";
import Image from "next/image";
/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import ProfileDropDown from "./designs/ProfileDropDown";

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Shop",
    url: "/shop",
  },
  {
    name: "About Us",
    url: "/about-us",
  },
  {
    name: "Events",
    url: "/events",
  },
  {
    name: "Subscription",
    url: "/subscription",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Header = ({ currentPage, handleCart }: any) => {
  const token: any = useSelector((state: RootState) => state.users.token);
  const user: any = useSelector((state: RootState) => state.users.user);

  return (
    <div className={`relative w-screen z-[1000]`}>
      <div className="fixed top-6 left-2 right-2 md:left-20 lg:left-60 md:right-20 lg:right-60 bg-white flex flex-wrap items-center justify-between px-6 rounded-md shadow-md">
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt=""
            width={500}
            height={500}
            className="h-4 w-auto"
          />
        </Link>
        <div className="flex-wrap gap-6 hidden md:flex">
          {menu.map((item, idx) => (
            <Link
              href={item.url}
              key={idx}
              className={`${
                currentPage === item.name &&
                "font-semibold border-b-red border-b-2"
              } py-4`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <CiSearch />
          <div className="cursor-pointer" onClick={handleCart}>
            <IoCartOutline />
          </div>

          {!user ? (
            <Link
              href="/sign-in"
              className="bg-black text-white rounded-lg py-2 px-4"
            >
              Sign In
            </Link>
          ) : (
            <DropDownUi
              arrow={false}
              placement="bottomCenter"
              item={<div className="text-black px-4">{user?.firstName}</div>}
              dropdownRender={<ProfileDropDown />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
