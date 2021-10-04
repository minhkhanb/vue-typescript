import { GetterTree } from 'vuex';
import {
  StudentGetters,
  StudentGetterTypes,
  StudentState,
} from '@/store/modules/student/types';
import { RootState } from '@/store/modules/root/types';

export const studentGetters: GetterTree<StudentState, RootState> &
  StudentGetters = {
  [StudentGetterTypes.STUDENT_SELECTED]: (state: StudentState) => {
    return state.list.filter((f) => f.selected);
  },
  [StudentGetterTypes.STUDENT_FILTER]:
    (state: StudentState) => (str: string) => {
      return state.list.filter((f) => {
        return `${f.firstName} ${f.lastName}`.includes(str);
      });
    },
};
