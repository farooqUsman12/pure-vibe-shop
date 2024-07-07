"use client";
import { all } from "@redux-saga/core/effects";
import { waitForUser } from "./sagas/user.saga";
import { waitForProducts } from "./sagas/products.saga";
import { waitForOrders } from "./sagas/order.saga";
import { waitForPayment } from "./sagas/payment.saga";
import { waitForTickets } from "./sagas/ticket.saga";

export default function* rootSaga() {
  yield all([
    waitForProducts(),
    waitForUser(),
    waitForOrders(),
    waitForPayment(),
    waitForTickets(),
  ]);
}
