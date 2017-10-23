import 'whatwg-fetch';
import getBaseURL from './baseURL';

const baseURL = getBaseURL();

export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(baseURL + url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); //eslint-disable-line no-console
}