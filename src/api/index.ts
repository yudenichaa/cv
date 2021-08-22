import axios from 'axios';

export const API = axios.create({
  baseURL: `http://0.0.0.0:1337/`,
});
