import { AxiosResponse } from 'axios';
import { AuthResponse } from './models';
import http from '../../../api/network-provider';

export const authService = Object.freeze({
  registration: (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return http.post<AuthResponse>('/auth/registration', { email, password });
  },

  login: (email: string, password: string): Promise<AxiosResponse<AuthResponse>> => {
    return http.post<AuthResponse>('/auth/login', { email, password });
  },

  logout: (): Promise<void> => {
    return http.post('/auth/logout');
  },
  refresh: () => {
    return http.get('/auth/refresh', { withCredentials: true });
  },
});
