// --------------- TYPES ---------------
import { Events } from '../Types';
import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    // console.log(action, action['payload'].entries, "action")
    switch (action.type) {
        // Register
        case Events.REQUEST:
            return { ...state, isEventSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Events.SUCCESS:
            return { ...state, isEventSuccess: true, successMsg: action.payload.message, eventListResponse: action && action['payload'] };
        case Events.FAILED:
            return { ...state, isEventSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message), eventListResponse: action && action['payload'] };
        default:
            return state;
    }
};
