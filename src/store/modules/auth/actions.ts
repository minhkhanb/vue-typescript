import { ActionTree } from 'vuex';
import {
  AuthActions,
  AuthActionTypes,
  AuthMutationTypes,
  AuthState,
} from './type';
import { RootState } from '@/store/modules/root/types';
import { AuthService } from '@/services/auth.service';
import { logger } from '@/utils/logger';

const authService = new AuthService();

export const authActions: ActionTree<AuthState, RootState> & AuthActions = {
  [AuthActionTypes.SET_AUTH]: ({ commit }, payload: boolean): void => {
    commit(AuthMutationTypes.SET_AUTH, payload);
  },

  [AuthActionTypes.IS_EMAIL_EXIST]: (_, email) => {
    return new Promise((resolve, reject) => {
      try {
        authService
          .emailExist(email)
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Check email exist done!');
      }
    });
  },

  [AuthActionTypes.RESET_PASSWORD]: (_, email) => {
    return new Promise((resolve, reject) => {
      try {
        authService
          .sendEmailResetPassword(email)
          .then((response) => {
            if (response.data) {
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Send email to reset password done!');
      }
    });
  },

  [AuthActionTypes.GET_NEW_PASSWORD_BY_CODE]: (_, params) => {
    return new Promise((resolve, reject) => {
      try {
        authService
          .newPasswordByCode(params)
          .then((response) => {
            if (response.data) {
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Get new password done!');
      }
    });
  },
};
