"use client";
import { createSlice } from "@reduxjs/toolkit";

const tickets = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
  },
  reducers: {
    addTicketsSlice: (state: any, action) => {
      return {
        ...state,
        tickets: action.payload,
      };
    },
  },
});

export const { addTicketsSlice } = tickets.actions;
export default tickets.reducer;
