import { Module } from 'vuex';
import { AuthState } from '@/store/modules/auth/type';
import { RootState } from '@/store/modules/root/types';
import { authState } from '@/store/modules/auth/state';
import { authMutations } from '@/store/modules/auth/mutations';
import { authActions } from '@/store/modules/auth/actions';
import { authGetters } from '@/store/modules/auth/getters';

const auth: Module<AuthState, RootState> = {
  namespaced: false,
  state: authState,
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};

export default auth;
