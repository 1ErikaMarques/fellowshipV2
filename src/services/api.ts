import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fellowship-backend.herokuapp.com/api',
});

export { api };