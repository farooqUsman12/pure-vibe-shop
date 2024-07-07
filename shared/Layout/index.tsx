/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { use, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "@/components/modules/Footer";
import { Drawer } from "antd";
import CartSidebar from "../CartSidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getUser } from "@/redux/actions/userActions";

const Layout = ({ children, currentPage }: any) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [pathName, setPathName] = useState<any>();
  const user = useSelector((state: RootState) => state.users.user);

  const onClose = () => {
    setOpen(false);
  };

  const handleCart = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const temp = localStorage.getItem("pure-vibe-token");
    if (temp && user === null) {
      dispatch(getUser());
    }
  }, []);

  useEffect(() => {
    const temp = window.location.pathname;
    setPathName(temp);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        className="z-[10000]"
      >
        <CartSidebar />
      </Drawer>
      <div className={`pt-20 ${pathName === "/" && "bg-[#EF233C05]"}`}>
        <Header currentPage={currentPage} handleCart={handleCart} />
      </div>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
