import {
  AuthGetters,
  AuthGetterTypes,
  AuthState,
} from '@/store/modules/auth/type';
import { GetterTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';

export const authGetters: GetterTree<AuthState, RootState> & AuthGetters = {
  [AuthGetterTypes.IS_LOGGED]: (state: AuthState): boolean | null => {
    return state.isLogged;
  },
};
