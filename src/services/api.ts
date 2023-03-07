import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://taskplanner-fake-api.onrender.com',
    timeout: 5000,
});