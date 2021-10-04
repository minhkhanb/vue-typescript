import { MutationTree } from 'vuex';
import { User } from '@/store/modules/user/type';
import {
  StudentMutations,
  StudentMutationTypes,
  StudentState,
} from '@/store/modules/student/types';

export const studentMutations: MutationTree<StudentState> & StudentMutations = {
  [StudentMutationTypes.SET_STUDENTS](state: StudentState, payload: User[]) {
    state.list = payload;
  },

  [StudentMutationTypes.CHOOSE_STUDENT](state: StudentState, payload: User) {
    const { list } = state;
    const found = list.find((f) => f.id === payload.id);
    if (found) {
      found['selected'] = !found.selected;
    }
  },
  [StudentMutationTypes.SET_STUDENT_SELECTED](
    state: StudentState,
    payload: string[]
  ) {
    const { list } = state;
    if (Array.isArray(payload)) {
      payload.forEach((id) => {
        const found = list.find((f) => f.id === id);
        if (found) {
          found['selected'] = true;
        }
      });
    }
  },
};
