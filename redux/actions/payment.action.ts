"use client";

import { CHECKOUT } from "../types/payment";

export const checkoutAction = (value: any) => {
  return {
    type: CHECKOUT,
    paload: value,
  };
};
