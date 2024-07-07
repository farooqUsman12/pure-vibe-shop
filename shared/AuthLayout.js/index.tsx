"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { setTokenSlice } from "@/redux/slices/users";
import { Drawer } from "antd";
import Footer from "@/components/modules/Footer";
import CartSidebar from "../CartSidebar";
import Header from "../Header";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.users.token);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleCart = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let temp = localStorage.getItem("pure-vibe-token");
    if (temp) {
      dispatch(setTokenSlice(temp));
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="flex flex-col w-full">
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        className="z-[10000]"
      >
        <CartSidebar />
      </Drawer>
      <Header handleCart={handleCart} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
