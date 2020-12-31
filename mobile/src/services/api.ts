import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.236.3.59',
});

export default api;
