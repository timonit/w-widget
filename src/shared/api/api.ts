import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

/**
 * base API
 */
export default abstract class API {
  abstract baseAPI: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async request<T = any, D = any>(
    config: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    const curConfig = { baseURL: this.baseAPI, ...config };

    const res = await axios.request(curConfig);
    return res;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get<T = any, D = any>(
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    const changedConfig = { ...config, method: 'GET' };

    return this.request(changedConfig);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post<T = any, D = any>(
    config: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    const changedConfig = { ...config, method: 'POST' };

    return this.request(changedConfig);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete<T = any, D = any>(
    config?: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    const changedConfig = { ...config, method: 'DELETE' };

    return this.request(changedConfig);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  patch<T = any, D = any>(
    config: AxiosRequestConfig<D>,
  ): Promise<AxiosResponse<T, D>> {
    const changedConfig = { ...config, method: 'PATCH' };

    return this.request(changedConfig);
  }
}
