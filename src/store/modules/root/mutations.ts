import { MutationTree } from 'vuex';
import {
  RootMutations,
  RootMutationTypes,
  RootState,
} from '@/store/modules/root/types';

export const rootMutations: MutationTree<RootState> & RootMutations = {
  [RootMutationTypes.SET_LOADING](state: RootState, payload: boolean) {
    state.loading = payload;
  },
};
