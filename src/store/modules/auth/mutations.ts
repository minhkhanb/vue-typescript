import {
  AuthMutations,
  AuthMutationTypes,
  AuthState,
} from '@/store/modules/auth/type';
import { MutationTree } from 'vuex';

export const authMutations: MutationTree<AuthState> & AuthMutations = {
  [AuthMutationTypes.SET_AUTH](state: AuthState, payload: boolean): void {
    state.isLogged = payload;
  },
};
