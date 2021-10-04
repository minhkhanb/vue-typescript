import { ActionTree } from 'vuex';
import {
  User,
  UserActions,
  UserActionTypes,
  UserMutationTypes,
  UserState,
} from '@/store/modules/user/type';
import { RootState } from '@/store/modules/root/types';
import { AuthService } from '@/services/auth.service';
import { UserService } from '@/services/user.service';
import { logger } from '@/utils/logger';

const authService = new AuthService();
const userService = new UserService();

export const userActions: ActionTree<UserState, RootState> & UserActions = {
  [UserActionTypes.SET_USER_INFO]: ({ commit }, payload?: User): void => {
    commit(UserMutationTypes.SET_USER_INFO, payload);
  },

  [UserActionTypes.LOGIN]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      try {
        authService
          .login()
          .then((response) => {
            if (response.data) {
              commit(UserMutationTypes.SET_USER_INFO, response.data);
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Login successfully');
      }
    });
  },

  [UserActionTypes.DEMO_LOGIN]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      try {
        authService
          .demoLogin()
          .then((response) => {
            if (response.data) {
              commit(UserMutationTypes.SET_USER_INFO, response.data);
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Login successfully');
      }
    });
  },

  [UserActionTypes.ACCESS_CODE]: (_, code) => {
    return new Promise((resolve, reject) => {
      try {
        userService
          .accessCode(code)
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Submit access code successful');
      }
    });
  },

  [UserActionTypes.UPDATE_USER_INFO]: ({ commit }, user) => {
    return new Promise((resolve, reject) => {
      try {
        userService.updateProfile(user).then((response) => {
          if (response.data) {
            commit(UserMutationTypes.SET_USER_INFO, response.data);
            resolve(response.data);
          }
        });
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Update user profile successful');
      }
    });
  },
};
