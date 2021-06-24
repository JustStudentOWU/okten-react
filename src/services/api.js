import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = () => axiosInstance.get('/comments?_limit=10');
const getPost = (id) => axiosInstance.get('comments/' + id);
const getUsers = () => axiosInstance.get('/users');
const getUser = (id) => axiosInstance.get('/users/' + id);

export {getPost, getPosts, getUser, getUsers};
