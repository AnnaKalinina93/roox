import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    AxiosRequestConfig
  } from 'axios';
  
  const BACKEND_URL = 'https://jsonplaceholder.typicode.com/users';
  const REQUEST_TIMEOUT = 5000;
  
  export const createAPI = (): AxiosInstance => {
    const api = axios.create({
      baseURL: BACKEND_URL,
      timeout: REQUEST_TIMEOUT,
    });
  
    api.interceptors.response.use(
      (response: AxiosResponse) => response,
  
      (error: AxiosError) => Promise.reject(error),
    );
  
    api.interceptors.request.use((config: AxiosRequestConfig) => config);
  
    return api;
  };