import { MutationTree } from 'vuex';
import {
  InstructorMutations,
  InstructorMutationTypes,
  InstructorState,
} from '@/store/modules/instructor/types';
import { User } from '@/store/modules/user/type';

export const instructorMutations: MutationTree<InstructorState> &
  InstructorMutations = {
  [InstructorMutationTypes.SET_INSTRUCTORS](
    state: InstructorState,
    payload: User[]
  ) {
    state.list = payload;
  },

  [InstructorMutationTypes.CHOOSE_INSTRUCTOR](
    state: InstructorState,
    payload: User
  ) {
    const { list } = state;
    const found = list.find((f) => f.id === payload.id);
    if (found) {
      found['selected'] = !found.selected;
    }
  },
  [InstructorMutationTypes.SET_INSTRUCTOR_SELECTED](
    state: InstructorState,
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
