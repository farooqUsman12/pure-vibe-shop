"use client";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { createTicketApi, getTicketsApi } from "../services/ticket.services";
import { addTicketsSlice } from "../slices/tickets";
import { CREATE_TICKET, GET_TICKETS } from "../types/ticket";

// function* createAlertWithTimeout(payload) {
//   yield put(createAlert(payload));
//   yield delay(2000);
//   yield put(alertOff());
// }

function* getTicketsHandler() {
    try {
        const response = yield call(getTicketsApi);
        if (response.status === 200) {
            const tickets = response.data.tickets;
            yield put(addTicketsSlice(tickets));
        }
    } catch (err) {
        // handle error
    }
}

function* createTicketHandler(action) {
    try {
        const response = yield call(createTicketApi, action.payload);
        if (response.status === 200) {
            yield* getTicketsHandler()
            // const tickets = response.data.ticket;
            // yield put(addTicketsSlice(tickets));
        }
    } catch (err) {
        // handle error
    }
}

export function* waitForTickets() {
    yield takeEvery(GET_TICKETS, getTicketsHandler);
    yield takeEvery(CREATE_TICKET, createTicketHandler);
}
