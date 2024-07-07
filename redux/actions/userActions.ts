"use client";
import { SignUpType } from "@/types/constants-data";
import { GET_USER, LOGIN_USER, REGISTER_USER } from "../types/user";
import { userResetSlice } from "../slices/users";

export const loginAction = (value: SignUpType) => {
  return {
    type: LOGIN_USER,
    payload: value,
  };
};

export const registerAction = (value: SignUpType) => {
  return {
    type: REGISTER_USER,
    payload: value,
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
  };
};

export const logoutUser = (router: any, dispatch: any) => {
  localStorage.removeItem("pure-vibe-token");
  dispatch(userResetSlice());
  router.push("/sign-in");
};
