import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerapp-b036f.firebaseio.com/'
})

export default instance;

