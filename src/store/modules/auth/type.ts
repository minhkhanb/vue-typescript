import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { RootState } from '@/store/modules/root/types';
import {
  NewPasswordByCodeOption,
  ResetPasswordOption,
} from '@/services/auth.service';

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
  IS_EMAIL_EXIST = 'IS_EMAIL_EXIST',
  RESET_PASSWORD = 'RESET_PASSWORD',
  GET_NEW_PASSWORD_BY_CODE = 'GET_NEW_PASSWORD_BY_CODE',
}

export type AuthMutations<S = AuthState> = {
  [AuthMutationTypes.SET_AUTH](state: S, payload: boolean): void;
};

type AugmentedActionContextAuth = {
  commit<K extends keyof AuthMutations>(
    key: K,
    payload: Parameters<AuthMutations[K]>[1]
  ): ReturnType<AuthMutations[K]>;
} & Omit<ActionContext<AuthState, RootState>, 'commit'>;

export interface AuthActions {
  [AuthActionTypes.SET_AUTH](
    { commit }: AugmentedActionContextAuth,
    payload: boolean
  ): void;

  [AuthActionTypes.IS_EMAIL_EXIST](
    _: AugmentedActionContextAuth,
    email: string
  ): Promise<boolean>;

  [AuthActionTypes.RESET_PASSWORD](
    _: AugmentedActionContextAuth,
    email: string
  ): Promise<ResetPasswordOption>;

  [AuthActionTypes.GET_NEW_PASSWORD_BY_CODE](
    _: AugmentedActionContextAuth,
    params: NewPasswordByCodeOption
  ): Promise<ResetPasswordOption>;
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
