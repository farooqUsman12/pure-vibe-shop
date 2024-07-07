"use client";
import { call, put, takeEvery, delay } from "@redux-saga/core/effects";
import { GET_ORDERS } from "../types/orders";
import { getOrdersApi, getOrdersDetailsApi } from "../services/order.services";
import { addOrdersSlice } from "../slices/orders";

// function* createAlertWithTimeout(payload) {
//   yield put(createAlert(payload));
//   yield delay(2000);
//   yield put(alertOff());
// }

function* getOrdersHandler() {
    try {
        const response = yield call(getOrdersApi);
        if (response.status === 200) {
            const order = response.data.orders;
            yield put(addOrdersSlice(order));
        }
    } catch (err) {
        // handle error
    }
}

export function* waitForOrders() {
    yield takeEvery(GET_ORDERS, getOrdersHandler);
}
