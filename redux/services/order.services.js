"use client";
import API from "./base.service";

export const getOrdersApi = async () => API.get("/orders/me");
