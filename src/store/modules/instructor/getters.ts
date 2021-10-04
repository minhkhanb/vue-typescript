import { GetterTree } from 'vuex';
import {
  InstructorGetters,
  InstructorGetterTypes,
  InstructorState,
} from '@/store/modules/instructor/types';
import { RootState } from '@/store/modules/root/types';

export const instructorGetters: GetterTree<InstructorState, RootState> &
  InstructorGetters = {
  [InstructorGetterTypes.INSTRUCTOR_SELECTED]: (state: InstructorState) => {
    return state.list.filter((f) => f.selected);
  },
  [InstructorGetterTypes.INSTRUCTOR_FILTER]:
    (state: InstructorState) => (str: string) => {
      return state.list.filter((f) => {
        return `${f.firstName} ${f.lastName}`.includes(str);
      });
    },
};
