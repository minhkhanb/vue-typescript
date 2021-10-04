import { Module } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { CourseState } from '@/store/modules/course/types';
import { courseState } from '@/store/modules/course/state';
import { courseGetters } from '@/store/modules/course/getters';
import { courseMutations } from '@/store/modules/course/mutations';
import { courseActions } from '@/store/modules/course/actions';

const course: Module<CourseState, RootState> = {
  namespaced: false,
  state: courseState,
  getters: courseGetters,
  mutations: courseMutations,
  actions: courseActions,
};

export default course;
