import axios, { AxiosInstance } from 'axios';

export function useApiInstance(): AxiosInstance {
  const { REACT_APP_API_HOST, REACT_APP_API_PORT } = process.env; 
  return axios.create({
    baseURL: `${REACT_APP_API_HOST}:${REACT_APP_API_PORT}`,
  });
}
