import axios from 'axios';

const axiosInstance = axios.create({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const getUsers = () => axiosInstance.get('/users');

export {getUsers};
