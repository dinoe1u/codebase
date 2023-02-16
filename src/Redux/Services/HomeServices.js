import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';
import Ajax from './base';

const BASE_URL = Constants.IS_DEVELOPING_MODE
    ? Constants.BASE_URL.DEV
    : Constants.BASE_URL.PROD;

export default {
    GetEvents: () => {
        if (global.isConnected) {
            return fetch(BASE_URL + 'entries', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': Constants.USER_AGENT,
                    'accesskey': 'nousername'
                },
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });
        } else {
            return Promise.reject({ message: Constants.NO_INTERNET_MESSAGE });
        }
    },
};
