import axios, { AxiosResponse } from 'axios';
import meta from '~/api/meta';

export enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

const axiosInstance = axios.create(meta);

axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
  return response.data;
});

export default async (method: RequestMethod, url: string, ...args: any[]) => {
  return (axiosInstance[method] as Function)(url, ...args);
};
