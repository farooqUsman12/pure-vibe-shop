"use client";
import { combineReducers } from "@reduxjs/toolkit";
import product from "./product";
import users from "./users";
import cart from "./cart";
import orders from "./orders";
import tickets from "./tickets";

const reducers = combineReducers({
  product,
  users,
  cart,
  orders,
  tickets,
});

export default reducers;
