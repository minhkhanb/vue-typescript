import { MutationTree } from 'vuex';
import _ from 'lodash';
import { User } from '@/store/modules/user/type';
import {
  DemoMutations,
  DemoMutationTypes,
  DemoState,
} from '@/store/modules/demo/types';
import { Course } from '@/store/modules/course/types';

export const demoMutations: MutationTree<DemoState> & DemoMutations = {
  [DemoMutationTypes.SET_COURSES_DEMO](state: DemoState, payload: Course[]) {
    state.courses = _.cloneDeep(payload);
  },

  [DemoMutationTypes.SET_INSTRUCTORS_DEMO](state: DemoState, payload: User[]) {
    state.instructors = payload;
  },

  [DemoMutationTypes.SET_STUDENTS_DEMO](state: DemoState, payload: User[]) {
    state.students = payload;
  },

  [DemoMutationTypes.SET_INSTRUCTOR_SELECTED_DEMO](
    state: DemoState,
    payload: string[]
  ) {
    const { instructors } = state;
    if (Array.isArray(payload)) {
      payload.forEach((id) => {
        const found = instructors.find((f) => f.id === id);
        if (found) {
          found['selected'] = true;
        }
      });
    }
  },

  [DemoMutationTypes.SET_STUDENT_SELECTED_DEMO](
    state: DemoState,
    payload: string[]
  ) {
    const { students } = state;
    if (Array.isArray(payload)) {
      payload.forEach((id) => {
        const found = students.find((f) => f.id === id);
        if (found) {
          found['selected'] = true;
        }
      });
    }
  },
};
