import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { User } from '@/store/modules/user/type';

export enum InstructorStateTypes {
  LIST = 'list',
}

export type InstructorState = { list: User[] };

export enum InstructorGetterTypes {
  INSTRUCTOR_SELECTED = 'INSTRUCTOR_SELECTED',
  INSTRUCTOR_FILTER = 'INSTRUCTOR_FILTER',
}

export type InstructorGetters = {
  [InstructorGetterTypes.INSTRUCTOR_SELECTED](state: InstructorState): User[];
  [InstructorGetterTypes.INSTRUCTOR_FILTER](
    state: InstructorState
  ): (str: string) => User[];
};

export enum InstructorMutationTypes {
  SET_INSTRUCTORS = 'SET_INSTRUCTORS',
  CHOOSE_INSTRUCTOR = 'CHOOSE_INSTRUCTOR',
  SET_INSTRUCTOR_SELECTED = 'SET_INSTRUCTOR_SELECTED',
}

export enum InstructorActionTypes {
  GET_INSTRUCTORS = 'GET_INSTRUCTORS',
}

export type InstructorMutations<S = InstructorState> = {
  [InstructorMutationTypes.SET_INSTRUCTORS](
    state: S,
    payload: User[] | undefined
  ): void;
  [InstructorMutationTypes.CHOOSE_INSTRUCTOR](state: S, payload: User): void;
  [InstructorMutationTypes.SET_INSTRUCTOR_SELECTED](
    state: S,
    payload: string[]
  ): void;
};

type AugmentedActionContextInstructor = {
  commit<K extends keyof InstructorMutations>(
    key: K,
    payload: Parameters<InstructorMutations[K]>[1]
  ): ReturnType<InstructorMutations[K]>;
} & Omit<ActionContext<InstructorState, RootState>, 'commit'>;

export interface InstructorOption {
  id?: string;
}

export interface InstructorActions {
  [InstructorActionTypes.GET_INSTRUCTORS](
    { commit }: AugmentedActionContextInstructor,
    id: string
  ): Promise<User[]>;
}

export type InstructorStoreModule<S = InstructorState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof InstructorMutations,
    P extends Parameters<InstructorMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<InstructorMutations[K]>;
} & {
  getters: {
    [K in keyof InstructorGetters]: ReturnType<InstructorGetters[K]>;
  };
} & {
  dispatch<K extends keyof InstructorActions>(
    key: K,
    payload?: Parameters<InstructorActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<InstructorActions[K]>;
};
