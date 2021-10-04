import { MutationTree } from 'vuex';
import {
  Course,
  CourseMutations,
  CourseMutationTypes,
  CourseState,
} from '@/store/modules/course/types';
import _ from 'lodash';

export const courseMutations: MutationTree<CourseState> & CourseMutations = {
  [CourseMutationTypes.SET_COURSES](state: CourseState, payload: Course[]) {
    state.courses = _.cloneDeep(payload);
  },
};
