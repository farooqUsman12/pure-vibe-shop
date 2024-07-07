/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import OrderDetails from "@/components/layouts/OrderDetails";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams();
  return <OrderDetails id={id} />;
};

export default page;
