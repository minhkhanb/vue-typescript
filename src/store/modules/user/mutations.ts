import {
  UserMutations,
  UserMutationTypes,
  UserProfile,
  UserState,
} from '@/store/modules/user/type';
import { MutationTree } from 'vuex';
import _ from 'lodash';

export const userMutations: MutationTree<UserState> & UserMutations = {
  [UserMutationTypes.SET_USER_INFO](
    state: UserState,
    payload: UserProfile
  ): void {
    state.userInfo = _.cloneDeep(payload);
  },
};
