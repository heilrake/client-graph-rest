import { AxiosResponse } from 'axios';
import { IUser } from './models';
import http from '../../../api/network-provider';

const profileService = Object.freeze({
  fetchProfile: (): Promise<AxiosResponse<IUser>> => {
    return http.get<IUser>('/profile');
  },
});
