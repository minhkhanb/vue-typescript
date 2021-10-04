import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { User } from '@/store/modules/user/type';

export enum StudentStateTypes {
  LIST = 'list',
}

export type StudentState = { list: User[] };

export enum StudentGetterTypes {
  STUDENT_SELECTED = 'STUDENT_SELECTED',
  STUDENT_FILTER = 'STUDENT_FILTER',
}

export type StudentGetters = {
  [StudentGetterTypes.STUDENT_SELECTED](state: StudentState): User[];
  [StudentGetterTypes.STUDENT_FILTER](
    state: StudentState
  ): (str: string) => User[];
};

export enum StudentMutationTypes {
  SET_STUDENTS = 'SET_STUDENTS',
  CHOOSE_STUDENT = 'CHOOSE_STUDENT',
  SET_STUDENT_SELECTED = 'SET_STUDENT_SELECTED',
}

export enum StudentActionTypes {
  GET_STUDENTS = 'GET_STUDENTS',
}

export type StudentMutations<S = StudentState> = {
  [StudentMutationTypes.SET_STUDENTS](
    state: S,
    payload: User[] | undefined
  ): void;
  [StudentMutationTypes.CHOOSE_STUDENT](state: S, payload: User): void;
  [StudentMutationTypes.SET_STUDENT_SELECTED](
    state: S,
    payload: string[]
  ): void;
};

type AugmentedActionContextStudent = {
  commit<K extends keyof StudentMutations>(
    key: K,
    payload: Parameters<StudentMutations[K]>[1]
  ): ReturnType<StudentMutations[K]>;
} & Omit<ActionContext<StudentState, RootState>, 'commit'>;

export interface StudentOption {
  id?: string;
}

export interface StudentActions {
  [StudentActionTypes.GET_STUDENTS](
    { commit }: AugmentedActionContextStudent,
    id: string
  ): Promise<User[]>;
}

export type StudentStoreModule<S = StudentState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof StudentMutations,
    P extends Parameters<StudentMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<StudentMutations[K]>;
} & {
  getters: {
    [K in keyof StudentGetters]: ReturnType<StudentGetters[K]>;
  };
} & {
  dispatch<K extends keyof StudentActions>(
    key: K,
    payload?: Parameters<StudentActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<StudentActions[K]>;
};
