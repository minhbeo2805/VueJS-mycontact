import axios from "./config";
const URL = '/login';

export function callApiAuthenUser(params) {
    return axios.post(`/login`, params)
        .then(response => response)
        .catch(error => {
            console.log(error);
        })
}