import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { AuthActions } from '@/store/modules/auth/type';
import { CourseActions } from '@/store/modules/course/types';
import { InstructorActions } from '@/store/modules/instructor/types';
import { StudentActions } from '@/store/modules/student/types';
import { UserActions } from '@/store/modules/user/type';
import { DemoActions } from '@/store/modules/demo/types';

export type RootState = { loading: boolean };

export enum RootGetterTypes {
  LOADING = 'LOADING',
}

export type RootGetters = {
  [RootGetterTypes.LOADING](state: RootState): boolean;
};

export enum RootMutationTypes {
  SET_LOADING = 'SET_LOADING',
}

export enum RootActionTypes {
  SET_LOADING = 'SET_LOADING',
}

export type RootMutations<S = RootState> = {
  [RootMutationTypes.SET_LOADING](state: S, payload: boolean): void;
};

type AugmentedActionContextRoot = {
  commit<K extends keyof RootMutations>(
    key: K,
    payload: Parameters<RootMutations[K]>[1]
  ): ReturnType<RootMutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

export interface RootActions {
  [RootActionTypes.SET_LOADING](
    { commit }: AugmentedActionContextRoot,
    payload: boolean
  ): void;
}

export type RootStoreModule<S = RootState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof RootMutations,
    P extends Parameters<RootMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<RootMutations[K]>;
} & {
  getters: {
    [K in keyof RootGetters]: ReturnType<RootGetters[K]>;
  };
} & {
  dispatch<K extends keyof StoreActions>(
    key: K,
    payload?: Parameters<StoreActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<StoreActions[K]>;
};

export interface StoreActions
  extends RootActions,
    AuthActions,
    CourseActions,
    InstructorActions,
    StudentActions,
    UserActions,
    DemoActions {}
