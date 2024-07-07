"use client";
import API from "./base.service";

export const registerUserApi = async (payload: any) => API.post("/register", payload);
export const loginUserApi = async (payload: any) => API.post("/login", payload);
export const getUserApi = async () => API.get("/me");
