// --------------- TYPES ---------------
import {
    Register,
    Login,
    Logout
} from '../Types';
import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    isAuthenticated: false,
    error: null,
    errorMsg: '',
    successMsg: '',
    data: {},
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Register
        case Register.REQUEST:
            return { ...state, isRegisterSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Register.SUCCESS:
            return { ...state, isRegisterSuccess: true, successMsg: action.payload.message, data: action.payload.data, };
        case Register.FAILED:
            return { ...state, isRegisterSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message), };

        // Login
        case Login.REQUEST:
            return { ...state, isLoginSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Login.SUCCESS:
            return {
                ...state, isLoginSuccess: true, successMsg: action.payload.message, isAuthenticated: action.payload.data.is_verify,
                data: {
                    ...action.payload.data, userToken: action.payload.userToken,
                },
            };
        case Login.FAILED:
            return { ...state, isLoginSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message), };

        // Logout
        case Logout.REQUEST:
            return { ...state, isLogoutSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Logout.SUCCESS:
            return { ...state, isLogoutSuccess: true, successMsg: action.payload.message, };
        case Logout.FAILED:
            return { ...state, isLogoutSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message), };

        default:
            return state;
    }
};
