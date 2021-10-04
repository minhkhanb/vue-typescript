import { ActionTree } from 'vuex';
import {
  RootActions,
  RootActionTypes,
  RootMutationTypes,
  RootState,
} from '@/store/modules/root/types';

export const rootActions: ActionTree<RootState, RootState> & RootActions = {
  [RootActionTypes.SET_LOADING]({ commit }, payload: boolean) {
    commit(RootMutationTypes.SET_LOADING, payload);
  },
};
