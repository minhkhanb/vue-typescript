import { Module } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { studentState } from '@/store/modules/student/state';
import { studentMutations } from '@/store/modules/student/mutations';
import { studentActions } from '@/store/modules/student/actions';
import { studentGetters } from '@/store/modules/student/getters';
import { StudentState } from '@/store/modules/student/types';

const student: Module<StudentState, RootState> = {
  namespaced: false,
  state: studentState,
  mutations: studentMutations,
  actions: studentActions,
  getters: studentGetters,
};

export default student;
