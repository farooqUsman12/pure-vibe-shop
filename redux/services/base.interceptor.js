"use client"
// import { createAlert } from "../slices/alert";

export const interceptRequest = (requestConfig) => {
  const appTokenString = localStorage.getItem("pure-vibe-token");

  if (appTokenString) {
    requestConfig.headers.Authorization = `Bearer ${appTokenString}`;
  }
  
  if (requestConfig.data instanceof FormData) {
    requestConfig.headers['Content-Type'] = 'multipart/form-data';
  }
  
  return requestConfig;
};

export const interceptRequestError = (error) => {
  return Promise.reject(error);
};

export const interceptResponse = (response) => {
  return response;
};

export const interceptResponseError = (error) => {
  if (error?.response?.status === 506) {
    // createAlert({
    //   type: "error",
    //   message: "Your token is expired",
    //   status: true,
    // });
    window.localStorage.clear();
    // push to login
  }
  return Promise.reject(error);
};
