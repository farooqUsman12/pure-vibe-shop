// "use client"
// import { call, put, takeEvery, delay } from "@redux-saga/core/effects";
// import {
//   GET_USER,
//   GET_USERS,
//   LOGIN_USER,
//   OTP_CODE,
//   PHONE_REGISTER,
//   SCHEDULE_VALET,
//   TICKET_HISTROY,
//   UPDATE_PASSWORD,
//   UPDATE_USER,
//   USER_NOTIFICATIONS,
// } from "../types/user";
// import {
//   loginUsersApi,
//   phoneRegister,
  
// } from "../services/user.service";
// import {
//   getUsersSlice,
//   loginUserSlice,
//   otpUserSlice,
//   ticketHistroySlice,
//   updatePasswordSlice,
//   updateProfileSlice,
//   userUpdateSlice,
// } from "../slices/users";
// import { GET_TICKET } from "../types/ticket";
// import socket from "../services/socketConfig";
// import { addNotificationSlice } from "../slices/notification";

// function* createAlertWithTimeout(payload) {
//   yield put(createAlert(payload));
//   yield delay(2000);
//   yield put(alertOff());
// }

// function* phoneRegisterHandler(action) {
//   try {
//     const response = yield call(phoneRegister, action.payload);
//     if (response.status === 200) {
//       const user = response.data.user;
//       const token = "";
//       yield put(loginUserSlice({ user, token }));

//       yield* createAlertWithTimeout({
//         message: response.data.message,
//         title: "Success",
//         type: "success",
//       });
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message || "Error occurred while registering user",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* otpCodeHandler(action) {
//   try {
//     const response = yield call(otpCodeApi, action.payload);
//     if (response.status === 200) {
//       const token = response.data.token;
//       yield put(otpUserSlice({ token }));
//       localStorage.setItem("easy-ride-app", JSON.stringify(token));

//       yield* createAlertWithTimeout({
//         message: response.data.message,
//         title: "Success",
//         type: "success",
//       });
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message || "Error occurred while verifying OTP",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* updatePasswordHandler(action) {
//   try {
//     const response = yield call(updatePasswordApi, action.payload);
//     if (response.status === 200) {
//       yield put(userUpdateSlice(response.data.user));
//       yield put(updatePasswordSlice());

//       yield* createAlertWithTimeout({
//         message: response.data.message,
//         title: "Success",
//         type: "success",
//       });
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message ||
//         "Error occurred while updating password",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* updateUserHandler(action) {
//   try {
//     const response = yield call(updateUserApi, action.payload);
//     if (response.status === 200) {
//       yield put(userUpdateSlice(response.data.user));
//       yield put(updateProfileSlice());

//       yield* createAlertWithTimeout({
//         message: response.data.message,
//         title: "Success",
//         type: "success",
//       });
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message ||
//         "Error occurred while updating user profile",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* getUserHandler(action) {
//   try {
//     const response = yield call(getUsersApi, action.payload);
//     if (response.status === 200) {
//       const users = response.data;
//       yield put(getUsersSlice({ users }));
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message ||
//         "Error occurred while fetching user data",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* loginUserHandler(action) {
//   try {
//     const response = yield call(loginUsersApi, action.payload);
//     if (response.status === 200) {
//       const user = response.data.user;
//       const token = response.data.token;
//       yield put(loginUserSlice({ user, token }));
//       localStorage.setItem("easy-ride-app", JSON.stringify(token));

//       yield* createAlertWithTimeout({
//         message: response.data.message,
//         title: "Success",
//         type: "success",
//       });
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message || "Error occurred while logging in",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* getUserwithIdHandler(action) {
//   try {
//     const response = yield call(getUserApi, action.payload);
//     if (response.status === 200) {
//       const user = response.data.user;
//       yield put(loginUserSlice({ user }));

//       yield* createAlertWithTimeout({
//         message: response.data.message,
//         title: "Success",
//         type: "success",
//       });
//     }
//   } catch (err) {
   
//   }
// }

// function* scheduleValetHandler(action) {
//   try {
//     const response = yield call(scheduleValetApi, action.payload);
//     if (response.status === 200) {
//       yield put({
//         type: GET_TICKET,
//         payload: { userId: action.payload?.userId },
//       });
//       socket.emit('clicked_call_car');

//       yield* createAlertWithTimeout({
//         message: response.data.message,
//         title: "Success",
//         type: "success",
//       });
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message ||
//         "Error occurred while fetching user data",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* ticketHistroyHandler(action) {
//   try {
//     const response = yield call(ticketHistroyApi, action.payload);
//     if (response.status === 200) {
//       yield put(ticketHistroySlice(response?.data?.historyList))
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message ||
//         "Error occurred while fetching user data",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// function* userNotificationHandler(action) {
//   try {
//     const response = yield call(userNotificationApi, action.payload);
//     if (response.status === 200) {
//       const user = response?.data?.notification;
//       yield put(addNotificationSlice({user}))
//     }
//   } catch (err) {
//     yield* createAlertWithTimeout({
//       message:
//         err?.response?.data?.message ||
//         "Error occurred while fetching user data",
//       title: "Error",
//       type: "error",
//     });
//   }
// }

// export function* waitForUser() {
//   yield takeEvery(PHONE_REGISTER, phoneRegisterHandler);
//   yield takeEvery(OTP_CODE, otpCodeHandler);
//   yield takeEvery(UPDATE_PASSWORD, updatePasswordHandler);
//   yield takeEvery(UPDATE_USER, updateUserHandler);
//   yield takeEvery(GET_USERS, getUserHandler);
//   yield takeEvery(LOGIN_USER, loginUserHandler);
//   yield takeEvery(GET_USER, getUserwithIdHandler);
//   yield takeEvery(SCHEDULE_VALET, scheduleValetHandler);
//   yield takeEvery(TICKET_HISTROY, ticketHistroyHandler);
//   yield takeEvery(USER_NOTIFICATIONS, userNotificationHandler);
// }
