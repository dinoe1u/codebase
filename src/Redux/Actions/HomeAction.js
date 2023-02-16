// --------------- TYPES ---------------
import { Events } from '../Types';

// --------------- ACTIONS ---------------
export const getEvents = {
    Request: (params) => ({ type: Events.REQUEST, params }),
    Success: (data) => ({ type: Events.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Events.FAILED, payload: error }),
};
