"use client";
import React from "react";
import { Steps } from "antd";

const Stepper = ({ current }: any) => (
  <>
    <Steps
      progressDot
      current={current}
      items={[
        {
          title: "Order Placed",
        },
        {
          title: "In Progress",
        },
        {
          title: "Shipped",
        },
        {
          title: "Delivered",
        },
      ]}
    />
  </>
);

export default Stepper;
