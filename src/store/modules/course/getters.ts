import { GetterTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import {
  CourseGetters,
  CourseGetterTypes,
  CourseState,
} from '@/store/modules/course/types';
import _ from 'lodash';

export const courseGetters: GetterTree<CourseState, RootState> & CourseGetters =
  {
    [CourseGetterTypes.COURSES]: (state) => {
      return _.cloneDeep(state.courses);
    },
  };
