"use client";
import { GET_ORDERS } from "../types/orders";

export const getOrderAction = () => {
  return {
    type: GET_ORDERS,
  };
};
