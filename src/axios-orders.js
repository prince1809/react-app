import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-dba47.firebaseio.com/'
});

export default instance;