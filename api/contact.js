import axios from "./config";
const URL = '/contact';

export function callApiGetAll() {
    return axios.get(URL)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
        });
}

export function callApiSearch(params) {
    return axios.get(`${URL}/search?searchName=${params.name}&searchEmail=${params.email}&page=${params.page}`)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
        });
}

export function callApiAdd(params) {
    return axios.post(URL, params)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
        })
}

export function callApiDelete(params) {
    return axios.delete(`${URL}/${params}`)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
        })
}

export function callApiUpdate(params) {
    return axios.put(`${URL}`, params)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
        })
}

export function callApiGetDetail(id) {
    return axios.get(`${URL}/${id}`)
        .then(response => response)
        .catch(error => {
            console.log(error);
        })
}
