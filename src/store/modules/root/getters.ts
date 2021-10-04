import { GetterTree } from 'vuex';
import {
  RootGetters,
  RootGetterTypes,
  RootState,
} from '@/store/modules/root/types';

export const rootGetters: GetterTree<RootState, RootState> & RootGetters = {
  [RootGetterTypes.LOADING]: (state) => {
    // console.log('state', state.loading);
    return state.loading;
  },
};
