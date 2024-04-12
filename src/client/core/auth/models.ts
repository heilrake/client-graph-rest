import { IUser } from '../profile/models';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
