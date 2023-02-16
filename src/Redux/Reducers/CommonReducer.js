// --------------- TYPES ---------------
import { GetNetwork } from '../Types';
import { Constants } from '../../CommonConfig';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    isConnected: false,
    userRole: Constants.USER_ROLE.USER,
    secretkey: '',
    error: null,
    errorMsg: '',
    recentSearchKeywords: [],
    showNotifBadge: false,
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GetNetwork.REQUEST:
            global.isConnected = action.payload
            return { ...state, isConnected: action.payload };

        default:
            return state;
    }
};
