import { ActionTree } from 'vuex';
import {
  AuthActions,
  AuthActionTypes,
  AuthMutationTypes,
  AuthState,
} from './type';
import { RootState } from '@/store/modules/root/types';

export const authActions: ActionTree<AuthState, RootState> & AuthActions = {
  [AuthActionTypes.SET_AUTH]: ({ commit }, payload: boolean): void => {
    commit(AuthMutationTypes.SET_AUTH, payload);
  },
};
