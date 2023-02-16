// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { Events } from '../Types';
import { getEvents } from '../Actions';
import API from '../Services';

const getEventSaga = function* getEventSaga({ params }) {
    try {
        const response = yield call(API.Home.GetEvents, params);
        if (!response?.entries) {
            throw new Error(response);
        }
        yield put(getEvents.Success(response));
    } catch (error) {
        yield put(getEvents.Failed(error));
    }
};

function* homeSaga() {
    yield all([
        takeEvery(Events.REQUEST, getEventSaga),
    ]);
}

export default homeSaga;