import { AxiosInterceptorManager, AxiosRequestConfig } from 'axios';
import storage from '@/api/storage';

export const JwtIntercept = (
  request: AxiosInterceptorManager<AxiosRequestConfig>
): void => {
  request.use((config) => {
    const token = storage.loadData('token');

    if (token) {
      const newConfig = {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `${token}`,
          // Authorization: `Bearer ${token}`,
        },
      };

      return newConfig;
    }

    return config;
  });
};
