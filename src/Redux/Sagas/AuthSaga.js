// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { Register, Login, Logout } from '../Types';
import { register, login, logout } from '../Actions';
import API from '../Services/AuthServices';

const registerSaga = function* registerSaga({ params }) {
    try {
        const response = yield call(API.Auth.Register, params);
        if (response?.status != 200) {
            throw new Error(response?.message ?? '');

        }
        yield put(register.Success(response));

    } catch (error) {
        yield put(register.Failed(error));
    }
};

const loginSaga = function* loginSaga({ params }) {
    try {
        const response = yield call(API.Auth.Login, params);
        if (response?.status != 200) {
            throw new Error(response?.message ?? '');
        }
        yield put(login.Success(response));
    } catch (error) {
        yield put(login.Failed(error));
    }
};

const logoutSaga = function* logoutSaga({ params }) {
    try {
        const response = yield call(API.Auth.Logout, params);
        if (response?.status != 200) {
            throw new Error(response?.message ?? '');
        }
        yield put(logout.Success(response));
    } catch (error) {
        yield put(logout.Failed(error));
    }
};


function* authSaga() {
    yield all([
        takeEvery(Register.REQUEST, registerSaga),
        takeEvery(Login.REQUEST, loginSaga),
        takeEvery(Logout.REQUEST, logoutSaga)
    ]);
}

export default authSaga;
