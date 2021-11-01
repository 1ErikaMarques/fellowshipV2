import axios from 'axios';
import {AuthState} from '../hooks/AuthContext';

const api = axios.create ({
    baseURL: 'https://fellowship-backend.herokuapp.com/api',
});

/**
 * Inteceptor para adicionar o token a todas chamadas API antes de serem enviadas para o backend.
 */
api.interceptors.request.use (function (config) {

    const storedUser = sessionStorage.getItem ('loggedUser');
    if (storedUser) {
        const loggedUser = JSON.parse (storedUser) as AuthState;
        if (config.headers) {
            config.headers['Authorization'] = `Bearer ${loggedUser.token}`;
        }
    }
    return config;
});

export {api};