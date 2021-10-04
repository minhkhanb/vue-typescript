import { Module } from 'vuex';
import { InstructorState } from '@/store/modules/instructor/types';
import { RootState } from '@/store/modules/root/types';
import { instructorState } from '@/store/modules/instructor/state';
import { instructorMutations } from '@/store/modules/instructor/mutations';
import { instructorActions } from '@/store/modules/instructor/actions';
import { instructorGetters } from '@/store/modules/instructor/getters';

const instructor: Module<InstructorState, RootState> = {
  namespaced: false,
  state: instructorState,
  mutations: instructorMutations,
  actions: instructorActions,
  getters: instructorGetters,
};

export default instructor;
