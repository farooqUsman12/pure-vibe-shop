"use client";
import { CREATE_TICKET, GET_TICKETS } from "../types/ticket";

export const createTicketAction = (value: any) => {
  return {
    type: CREATE_TICKET,
    payload: value,
  };
};

export const getTicketAction = () => {
  return {
    type: GET_TICKETS,
  };
};
