"use client";
import { createSlice } from "@reduxjs/toolkit";

const users = createSlice({
  name: "users",
  initialState: {
    token: "",
    user: null,
    sales: [],
    existingUser: "",
    otp: false,
    updatedPass: false,
    updatedProfile: false,
    forgetPasswordEmailSend: false,
    ticketHistroy: [],
  },
  reducers: {
    getUserSlice: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
      };
    },
    setTokenSlice: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    loginUserSlice: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
    userResetSlice: () => {
      return {
        token: "",
        managerToken: "",
        attendantToken: "",
        user: null,
        sales: [],
        existingUser: "",
        otp: false,
        updatedPass: false,
        updatedProfile: false,
        forgetPasswordEmailSend: false,
        ticketHistroy: [],
      };
    },
    userUpdateSlice: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    ticketHistroySlice: (state, action) => {
      return {
        ...state,
        ticketHistroy: action.payload,
      };
    },
  },
});

export const {
  getUserSlice,
  loginUserSlice,
  userResetSlice,
  userUpdateSlice,
  ticketHistroySlice,
  setTokenSlice,
} = users.actions;
export default users.reducer;
