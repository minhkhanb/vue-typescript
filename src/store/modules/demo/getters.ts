import { GetterTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import _ from 'lodash';
import {
  DemoGetters,
  DemoGetterTypes,
  DemoState,
} from '@/store/modules/demo/types';

export const demoGetters: GetterTree<DemoState, RootState> & DemoGetters = {
  [DemoGetterTypes.COURSES_DEMO]: (state) => {
    return _.cloneDeep(state.courses);
  },

  [DemoGetterTypes.INSTRUCTOR_FILTER_DEMO]:
    (state: DemoState) => (str: string) => {
      return state.instructors.filter((f) => {
        return `${f.firstName} ${f.lastName}`.includes(str);
      });
    },

  [DemoGetterTypes.STUDENT_FILTER_DEMO]:
    (state: DemoState) => (str: string) => {
      return state.students.filter((f) => {
        return `${f.firstName} ${f.lastName}`.includes(str);
      });
    },

  [DemoGetterTypes.INSTRUCTOR_SELECTED_DEMO]: (state: DemoState) => {
    return state.instructors.filter((f) => f.selected);
  },
};
