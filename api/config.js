import axios from "axios"

const apiUrl = 'http://ec2-3-1-103-84.ap-southeast-1.compute.amazonaws.com:8080';

axios.defaults.baseURL = apiUrl;

export default axios;