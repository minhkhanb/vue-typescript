import { userRoles } from '@/constant/userRoles';
import {
  UserGetters,
  UserGetterTypes,
  UserProfile,
  UserState,
} from '@/store/modules/user/type';
import { GetterTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';

export const userGetters: GetterTree<UserState, RootState> & UserGetters = {
  [UserGetterTypes.GET_PROFILE]: (state: UserState): UserProfile => {
    return state.userInfo;
  },
  [UserGetterTypes.READ_ONLY]: (state: UserState): boolean =>
    !(state?.userInfo?.role !== userRoles.demo),
};
