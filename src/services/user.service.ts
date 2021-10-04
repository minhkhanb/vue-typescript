import { UserProfile } from '@/store/modules/user/type';
import apiClient from '@/api';
import { AxiosResponse } from 'axios';

export class UserService {
  public updateProfile(user: UserProfile): Promise<AxiosResponse<UserProfile>> {
    return apiClient.put<UserProfile>('/user/profile', undefined, user);
  }

  public accessCode(accessCode: string): Promise<AxiosResponse<boolean>> {
    return apiClient.post<boolean>('/coupon/accessCode', undefined, {
      accessCode,
    });
  }
}
