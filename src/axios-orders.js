import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-e0950.firebaseio.com/'
});

export default instance;