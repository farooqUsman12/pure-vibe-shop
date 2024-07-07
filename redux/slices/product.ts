"use client"
import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getProductsSlice: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
});

export const {
  getProductsSlice,
} = products.actions;
export default products.reducer;
