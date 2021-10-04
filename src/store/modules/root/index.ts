import { Module, ModuleTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { rootState } from '@/store/modules/root/state';
import { rootGetters } from '@/store/modules/root/getters';
import { rootMutations } from '@/store/modules/root/mutations';
import { rootActions } from '@/store/modules/root/actions';
import auth from '@/store/modules/auth';

const modules: ModuleTree<RootState> = {
  auth,
};

const root: Module<RootState, RootState> = {
  namespaced: false,
  state: rootState,
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  modules,
};

export default root;
