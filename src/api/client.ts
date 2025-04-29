import axios, { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'Content-Type': 'application/json' },
});

export const request = <T>(promise: Promise<AxiosResponse<T>>): Promise<T> =>
  promise
    .then(res => res.data)
    .catch(error => {
      console.error('API request error:', error);
      throw error;
    });

export default api;
