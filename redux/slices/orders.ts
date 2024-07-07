"use client";
import { createSlice } from "@reduxjs/toolkit";

const orders = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    addOrdersSlice: (state: any, action) => {
      return {
        ...state,
        orders: action.payload,
      };
    },
  },
});

export const { addOrdersSlice } = orders.actions;
export default orders.reducer;
