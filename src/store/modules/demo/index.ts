import { Module } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { DemoState } from '@/store/modules/demo/types';
import { demoState } from '@/store/modules/demo/state';
import { demoActions } from '@/store/modules/demo/actions';
import { demoMutations } from '@/store/modules/demo/mutations';
import { demoGetters } from '@/store/modules/demo/getters';

const demo: Module<DemoState, RootState> = {
  namespaced: false,
  state: demoState,
  getters: demoGetters,
  mutations: demoMutations,
  actions: demoActions,
};

export default demo;
