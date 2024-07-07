"use client";
import API from "./base.service";

export const checkoutApi = async () => API.get("/orders/me");
