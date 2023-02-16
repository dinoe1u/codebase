// --------------- TYPES ---------------
import { Register, Login, Logout } from '../Types';

// --------------- ACTIONS ---------------
export const register = {
    Request: (params) => ({ type: Register.REQUEST, params }),
    Success: (data) => ({ type: Register.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Register.FAILED, payload: error }),
};

export const login = {
    Request: (params) => ({ type: Login.REQUEST, params }),
    Success: (data) => ({ type: Login.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Login.FAILED, payload: error }),
};

export const logout = {
    Request: (params) => ({ type: Logout.REQUEST, params }),
    Success: (data) => ({ type: Logout.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Logout.FAILED, payload: error }),
};
