import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://eqi-test.herokuapp.com/',
});
