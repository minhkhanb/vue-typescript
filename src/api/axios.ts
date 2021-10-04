import axios, { AxiosInstance } from 'axios';
import appConfig from '@/common/config/app';
import { JwtIntercept } from '@/api/interceptors/jwt.interceptor';
import { ErrorIntercept } from '@/api/interceptors/error.interceptor';

const axiosInstance = axios.create({
  baseURL: appConfig.API_URL,
  timeout: appConfig.API_TIMEOUT,
  headers: {
    'Content-type': 'application/json',
  },
});

const registerInterceptors = (axiosInst: AxiosInstance) => {
  JwtIntercept(axiosInst.interceptors.request);
  ErrorIntercept(axiosInst.interceptors.response);
};

registerInterceptors(axiosInstance);

export default axiosInstance;
