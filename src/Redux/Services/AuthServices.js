import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';
import Ajax from './base';

const BASE_URL = Tools.isTestEnvironment()
    ? Constants.BASE_URL.TEST + 'auth/'
    : Constants.BASE_URL.PROD + 'auth/';

export default {
    RefreshToken: () => {
        if (global.isConnected) {
            return fetch(BASE_URL + 'refreshToken', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': Constants.USER_AGENT,
                    accesskey: 'nousername',
                },
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    if (data.status != 200) {
                        return Promise.reject(data);
                    }
                    return data;
                });
        } else {
            return Promise.reject({ message: Constants.NO_INTERNET_MESSAGE });
        }
    },

    Register: (params) => {
        if (global.isConnected) {
            return fetch(BASE_URL + 'register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    accesskey: 'nousername',
                    secretkey: global.secretkey,
                    device_type: Constants.DEVICE_TYPE,
                    device_token: global.deviceToken,
                },
                body: params,
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NO_INTERNET_MESSAGE });
        }
    },

    Login: ({ params }) => {
        if (global.isConnected) {
            return fetch(BASE_URL + 'login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    accesskey: 'nousername',
                    secretkey: global.secretkey,
                    device_type: Constants.DEVICE_TYPE,
                    device_token: global.deviceToken,
                },
                body: JSON.stringify(params),
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NO_INTERNET_MESSAGE });
        }
    },

    Logout: (params) => {
        if (global.isConnected) {
            return fetch(BASE_URL + `logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    device_token: global.deviceToken,
                    'x-access-token': global.accesskey,
                    guid: global.guid,
                },
                body: JSON.stringify(params)
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NO_INTERNET_MESSAGE });
        }
    },
};
