"use client";
import { call, put, takeEvery, delay } from "@redux-saga/core/effects";
import { GET_PRODUCTS } from "../types/products";
import { getProductApi } from "../services/products.service";
import { getProductsSlice } from "../slices/product";

// function* createAlertWithTimeout(payload) {
//   yield put(createAlert(payload));
//   yield delay(2000);
//   yield put(alertOff());
// }

function* productsHandler() {
  try {
    const response = yield call(getProductApi);
    if (response.status === 200) {
      const products = response.data.products;
      yield put(getProductsSlice(products));
    }
  } catch (err) {
    // handle error
  }
}

export function* waitForProducts() {
  yield takeEvery(GET_PRODUCTS, productsHandler);
}
