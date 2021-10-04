import apiClient from '@/api';
import { User } from '@/store/modules/user/type';
import { AxiosResponse } from 'axios';
import { logger } from '@/decorators/logger';
import PATH from '@/shareds/path';

export type ResetPasswordOption = {
  success: boolean;
};

export type NewPasswordByCodeOption = {
  code: string | null;
  email: string | null;
  password: string;
};

export class AuthService {
  @logger
  public login(): Promise<AxiosResponse<User>> {
    return apiClient.get<User>('/user/login');
  }

  public demoLogin(): Promise<AxiosResponse<User>> {
    return apiClient.get<User>('/user/login/demo');
  }

  public emailExist(email: string): Promise<AxiosResponse<boolean>> {
    return apiClient.post<boolean>('/user/email/exist', undefined, { email });
  }

  public sendEmailResetPassword(
    email: string
  ): Promise<AxiosResponse<ResetPasswordOption>> {
    const link = window.location.origin + PATH.NEW_PASSWORD;
    return apiClient.post<ResetPasswordOption>(
      '/user/resetPassword',
      undefined,
      { email, link }
    );
  }

  public newPasswordByCode(
    params: NewPasswordByCodeOption
  ): Promise<AxiosResponse<ResetPasswordOption>> {
    return apiClient.post('/user/changePassword', undefined, params);
  }
}
