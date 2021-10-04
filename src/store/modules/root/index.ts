import { Module, ModuleTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { rootState } from '@/store/modules/root/state';
import { rootGetters } from '@/store/modules/root/getters';
import { rootMutations } from '@/store/modules/root/mutations';
import { rootActions } from '@/store/modules/root/actions';
import user from '@/store/modules/user';
import auth from '@/store/modules/auth';
import course from '@/store/modules/course';
import instructor from '@/store/modules/instructor';
import student from '@/store/modules/student';
import demo from '@/store/modules/demo';

const modules: ModuleTree<RootState> = {
  user,
  auth,
  course,
  instructor,
  demo,
  student,
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
