"use client";
import API from "./base.service";

export const getTicketsApi = async () => API.get("/tickets/me");
export const createTicketApi = async (payload) => API.post("/ticket/new", payload);
