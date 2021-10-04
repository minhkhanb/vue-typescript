import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { RootState } from '@/store/modules/root/types';

export type AuthState = {
  isLogged: boolean | null;
};

export enum AuthGetterTypes {
  IS_LOGGED = 'IS_LOGGED',
}

export type AuthGetters = {
  [AuthGetterTypes.IS_LOGGED](state: AuthState): boolean | null;
};

export enum AuthMutationTypes {
  SET_AUTH = 'SET_AUTH',
}

export enum AuthActionTypes {
  SET_AUTH = 'SET_AUTH',
}

export type AuthMutations<S = AuthState> = {
  [AuthMutationTypes.SET_AUTH]: (state: S, payload: boolean) => void;
};

type AugmentedActionContextAuth = {
  commit<K extends keyof AuthMutations>(
    key: K,
    payload: Parameters<AuthMutations[K]>[1]
  ): ReturnType<AuthMutations[K]>;
} & Omit<ActionContext<AuthState, RootState>, 'commit'>;

export interface AuthActions {
  [AuthActionTypes.SET_AUTH]: (
    { commit }: AugmentedActionContextAuth,
    payload: boolean
  ) => void;
}

export type AuthStoreModule<S = AuthState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof AuthMutations,
    P extends Parameters<AuthMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<AuthMutations[K]>;
} & {
  getters: {
    [K in keyof AuthGetters]: ReturnType<AuthGetters[K]>;
  };
} & {
  dispatch<K extends keyof AuthActions>(
    key: K,
    payload?: Parameters<AuthActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<AuthActions[K]>;
};
