import { all } from 'redux-saga/effects';

import AuthSaga from './AuthSaga';
import homeSaga from './HomeSaga';

//Main Root Saga
const rootSaga = function* rootSaga() {
    yield all([AuthSaga(), homeSaga()]);
};
export default rootSaga;
