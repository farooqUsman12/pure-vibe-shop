"use client"
export const BASE_URL_API =
  process.env.REACT_APP_API_URL || "https://tense-nightgown-seal.cyclic.app/api/v1";

const baseConfig = {
  baseURL: `${BASE_URL_API}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export default baseConfig;
