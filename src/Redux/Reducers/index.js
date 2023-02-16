import { combineReducers } from 'redux';

import { Logout } from '../Types';
import AuthReducer, { INITIAL_STATE as INITIAL_AUTH } from './AuthReducer';
import HomeReducer from './HomeReducer';
import CommonReducer from './CommonReducer';

let appReducer = combineReducers({
    Auth: AuthReducer,
    Home: HomeReducer,
    Common: CommonReducer
});

const rootReducer = (state, action) => {
    if (action.type === Logout.SUCCESS) {
        state = {
            Common: { ...INITIAL_COMMON, isConnected: state.Common.isConnected, },
            Auth: INITIAL_AUTH,
        };
    }
    return appReducer(state, action);
};

export default rootReducer;
