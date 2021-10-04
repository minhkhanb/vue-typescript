import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { AuthActions } from '@/store/modules/auth/type';

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

export interface StoreActions extends RootActions, AuthActions {}
