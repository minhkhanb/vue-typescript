import { Module } from 'vuex';
import { UserState } from '@/store/modules/user/type';
import { RootState } from '@/store/modules/root/types';
import { userState } from '@/store/modules/user/state';
import { userGetters } from '@/store/modules/user/getters';
import { userActions } from '@/store/modules/user/actions';
import { userMutations } from '@/store/modules/user/mutations';

const user: Module<UserState, RootState> = {
  namespaced: false,
  state: userState,
  getters: userGetters,
  mutations: userMutations,
  actions: userActions,
};

export default user;
