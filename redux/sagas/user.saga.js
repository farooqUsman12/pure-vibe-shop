"use client";
import { call, put, takeEvery, delay } from "@redux-saga/core/effects";
import { GET_USER, LOGIN_USER, REGISTER_USER } from "../types/user";
import {
  getUserApi,
  loginUserApi,
  registerUserApi,
} from "../services/user.service";
import { getUserSlice, loginUserSlice } from "../slices/users";

// function* createAlertWithTimeout(payload) {
//   yield put(createAlert(payload));
//   yield delay(2000);
//   yield put(alertOff());
// }

function* registerHandler(action) {
  try {
    const response = yield call(registerUserApi, action.payload);
    if (response.status === 200) {
      localStorage.setItem("pure-vibe-token", response.data.token);
      const user = response.data.user;
      const token = response.data.token;
      yield put(loginUserSlice({ user, token }));
    }
  } catch (err) {
    // handle error
  }
}

function* loginHandler(action) {
  try {
    const response = yield call(loginUserApi, action.payload);
    if (response.status === 200) {
      console.log(response);
      localStorage.setItem("pure-vibe-token", response.data.token);
      const user = response.data.user;
      const token = response.data.token;
      yield put(loginUserSlice({ user, token }));
    }
  } catch (err) {
    // handle error
  }
}

function* getUserHandler() {
  try {
    const response = yield call(getUserApi);
    if (response.status === 200) {
      const user = response.data.user;
      yield put(getUserSlice({ user }));
    }
  } catch (err) {
    // handle error
  }
}

export function* waitForUser() {
  yield takeEvery(REGISTER_USER, registerHandler);
  yield takeEvery(LOGIN_USER, loginHandler);
  yield takeEvery(GET_USER, getUserHandler);
}
