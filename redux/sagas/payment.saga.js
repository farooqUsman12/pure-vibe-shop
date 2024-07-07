"use client";
import { call, put, takeEvery, delay } from "@redux-saga/core/effects";
import { CHECKOUT } from "../types/payment";

// function* createAlertWithTimeout(payload) {
//   yield put(createAlert(payload));
//   yield delay(2000);
//   yield put(alertOff());
// }

function* checkoutHandler(action) {
    // try {
    //     const response = yield call(checkoutApi, action.payload);
    //     if (response.status === 200) {
    //         console.log(response)
    //     }
    // } catch (err) {
    //     // handle error
    // }
}

export function* waitForPayment() {
    yield takeEvery(CHECKOUT, checkoutHandler);
}
