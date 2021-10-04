import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { RootState } from '@/store/modules/root/types';

export enum UserRoles {
  SuperAdmin = 'SuperAdmin',
  InstructorAdmin = 'InstructorAdmin',
  Instructor = 'Instructor',
  Adjunct = 'Adjunct',
  Student = 'Student',
  Demo = 'Demo',
}

export enum PaymentStatus {
  Coupon = 'Coupon',
  None = 'None',
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  organizationId: string;
  campusId: string;
  programId: string;
  role?: UserRoles;
  paymentStatus: PaymentStatus;
  expires: string;
  studentLicenseTime: string;
  resetPasswordOtp?: string;
  createdAt: string;
  studentOf: string[];
  instructorOf: string[];
  superAdminOf: string[];
  inCourses: string[];
  selected: boolean;
}

interface Item {
  [key: string]: string;
}

export interface UserProfile
  extends Pick<User, 'firstName' | 'lastName' | 'email' | 'avatar' | 'role'> {
  organization?: Item;
  campus?: Item;
  program?: Item;
}

export type UserInput = Omit<User, 'password' | 'severity' | 'emailVerified'>;

export type UserTrial = Omit<
  User,
  | 'id'
  | 'username'
  | 'avatar'
  | 'studentOf'
  | 'instructorOf'
  | 'superAdminOf'
  | 'organizationId'
  | 'campusId'
  | 'programId'
  | 'studentLicenseTime'
  | 'organization'
  | 'inCourses'
  | 'role'
  | 'paymentStatus'
  | 'expires'
  | 'resetPasswordOtp'
  | 'createdAt'
>;

export type UserState = {
  userInfo: UserProfile;
};

export enum UserGetterTypes {
  GET_PROFILE = 'GET_PROFILE',
  READ_ONLY = 'READ_ONLY',
}

export type UserGetters = {
  [UserGetterTypes.GET_PROFILE](state: UserState): UserProfile;
  [UserGetterTypes.READ_ONLY](state: UserState): boolean;
};

export enum UserMutationTypes {
  SET_USER_INFO = 'SET_USER_INFO',
}

export enum UserActionTypes {
  SET_USER_INFO = 'SET_USER_INFO',
  LOGIN = 'LOGIN',
  DEMO_LOGIN = 'DEMO_LOGIN',
  ACCESS_CODE = 'ACCESS_CODE',
  UPDATE_USER_INFO = 'UPDATE_USER_INFO',
}

export type UserMutations<S = UserState> = {
  [UserMutationTypes.SET_USER_INFO](state: S, payload?: UserProfile): void;
};

type AugmentedActionContextUser = {
  commit<K extends keyof UserMutations>(
    key: K,
    payload: Parameters<UserMutations[K]>[1]
  ): ReturnType<UserMutations[K]>;
} & Omit<ActionContext<UserState, RootState>, 'commit'>;

export interface UserActions {
  [UserActionTypes.SET_USER_INFO](
    { commit }: AugmentedActionContextUser,
    payload?: User
  ): void;

  [UserActionTypes.LOGIN]({
    commit,
  }: AugmentedActionContextUser): Promise<User>;

  [UserActionTypes.DEMO_LOGIN]({
    commit,
  }: AugmentedActionContextUser): Promise<User>;

  [UserActionTypes.ACCESS_CODE](
    _: AugmentedActionContextUser,
    code: string
  ): Promise<boolean>;

  [UserActionTypes.UPDATE_USER_INFO](
    { commit }: AugmentedActionContextUser,
    user: UserProfile
  ): Promise<UserProfile>;
}

export type UserStoreModule<S = UserState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof UserMutations,
    P extends Parameters<UserMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<UserMutations[K]>;
} & {
  getters: {
    [K in keyof UserGetters]: ReturnType<UserGetters[K]>;
  };
} & {
  dispatch<K extends keyof UserActions>(
    key: K,
    payload?: Parameters<UserActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<UserActions[K]>;
};
