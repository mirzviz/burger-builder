import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-df55d/firebaseio.com'
});

export default instance;