import axios from 'axios';
import { BASE_API_URL } from 'Constants';

export const API = axios.create({
  baseURL: BASE_API_URL,
  withCredentials: true,
});
