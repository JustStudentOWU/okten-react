import axios from "axios";

let axiosInstance = axios.create({baseURL:'https://jsonplaceholder.typicode.com'});

const getUsers = () => axiosInstance.get('/users');
const getPosts = () => axiosInstance.get('/posts');
const getComments = () => axiosInstance.get('/comments');
const getUserPosts = (id) => axiosInstance.get('/users/' + id + '/posts');
const getPostComments = (id) => axiosInstance.get('/posts/' + id + '/comments');

export {getUsers, getPosts, getComments, getPostComments, getUserPosts}
