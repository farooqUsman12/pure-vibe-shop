"use client";
import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state: any, action) => {
      let quantity = 1;
      const item = state.cart.find(
        (item: any) => item?._id === action.payload?._id
      );
      if (item) {
        quantity = item.quantity + 1;
      }
      if (action.payload.quantity) {
        quantity = action?.payload?.quantity;
      }

      return {
        ...state,
        cart: [
          ...state.cart.filter((item: any) => item._id !== action.payload._id),
          { ...action.payload, quantity },
        ],
      };
    },
    removeFromCart: (state: any, action) => {
      const updatedCart = state.cart.filter(
        (item: any) => item?._id !== action.payload._id
      );
      return {
        ...state,
        cart: updatedCart,
      };
    },
    incrementQuantity: (state: any, action) => {
      const updatedCart = state.cart.map((item: any) => {
        if (item._id === action.payload._id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    },
    decrementQuantity: (state: any, action) => {
      const updatedCart = state.cart.map((item: any) => {
        if (item._id === action.payload._id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cart.actions;
export default cart.reducer;
