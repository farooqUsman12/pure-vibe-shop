"use client"
import API from "./base.service";

export const getProductApi = async () => API.get("/products");
