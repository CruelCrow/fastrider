import axios from 'axios';
import FastriderApiError from './FastriderApiError';

export default class FastriderApi {

    static _rootAPIUrl(path = '') {
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        return `${API_SERVER_URL}${path}`;
    }

    static _get(url, params = {}) {
        let paramsWithToken = Object.assign({}, params, {token: API_TOKEN});
        let req =
            axios.get(this._rootAPIUrl(url + '?' + Object.keys(paramsWithToken).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(paramsWithToken[k])}`).join('&')))
                .then((res) => {
                    return res;
                })
                .catch((err) => {
                    throw new FastriderApiError(err.response);
                });
        return req;
    }

    static _post(url, params = {}) {
        let req =
            axios.post(this._rootAPIUrl(url), Object.assign({}, params, {token: API_TOKEN}))
                .then((res) => {
                    return res;
                })
                .catch((err) => {
                    throw new FastriderApiError(err.response);
                });
        return req;
    }

    static rides() {
        return this._get('/rides');
    }

    static ticket(pin, ride_id) {
        return this._post('/tickets',
            {
                pin,
                ride_id
            });
    }
}