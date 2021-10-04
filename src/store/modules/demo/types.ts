import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { User } from '@/store/modules/user/type';
import { Course } from '@/store/modules/course/types';
import { FilterOption } from '@/services/course.service';

type ListMemberOption = {
  id: string;
  params: FilterOption;
};

export type DemoState = {
  courses: Course[];
  instructors: User[];
  students: User[];
};

export enum DemoGetterTypes {
  COURSES_DEMO = 'COURSES_DEMO',
  INSTRUCTOR_FILTER_DEMO = 'INSTRUCTOR_FILTER_DEMO',
  STUDENT_FILTER_DEMO = 'STUDENT_FILTER_DEMO',
  INSTRUCTOR_SELECTED_DEMO = 'INSTRUCTOR_SELECTED_DEMO',
}

export type DemoGetters = {
  [DemoGetterTypes.COURSES_DEMO](state: DemoState): Course[];
  [DemoGetterTypes.INSTRUCTOR_FILTER_DEMO](
    state: DemoState
  ): (str: string) => User[];
  [DemoGetterTypes.STUDENT_FILTER_DEMO](
    state: DemoState
  ): (str: string) => User[];

  [DemoGetterTypes.INSTRUCTOR_SELECTED_DEMO](state: DemoState): User[];
};

export enum DemoMutationTypes {
  SET_COURSES_DEMO = 'SET_COURSES_DEMO',
  SET_STUDENTS_DEMO = 'SET_STUDENTS_DEMO',
  SET_INSTRUCTORS_DEMO = 'SET_INSTRUCTORS_DEMO',
  SET_INSTRUCTOR_SELECTED_DEMO = 'SET_INSTRUCTOR_SELECTED_DEMO',
  SET_STUDENT_SELECTED_DEMO = 'SET_STUDENT_SELECTED_DEMO',
}

export enum DemoActionTypes {
  GET_COURSES_DEMO = 'GET_COURSES_DEMO',
  GET_STUDENTS_DEMO = 'GET_STUDENTS_DEMO',
  GET_INSTRUCTORS_DEMO = 'GET_INSTRUCTORS_DEMO',
  GET_LIST_MEMBERS_DEMO = 'GET_LIST_MEMBERS_DEMO',
  GET_COURSE_DETAIL_DEMO = 'GET_COURSE_DETAIL_DEMO',
}

export type DemoMutations<S = DemoState> = {
  [DemoMutationTypes.SET_COURSES_DEMO](state: S, payload: Course[]): void;
  [DemoMutationTypes.SET_INSTRUCTORS_DEMO](
    state: S,
    payload: User[] | undefined
  ): void;
  [DemoMutationTypes.SET_STUDENTS_DEMO](
    state: S,
    payload: User[] | undefined
  ): void;

  [DemoMutationTypes.SET_INSTRUCTOR_SELECTED_DEMO](
    state: S,
    payload: string[]
  ): void;

  [DemoMutationTypes.SET_STUDENT_SELECTED_DEMO](
    state: S,
    payload: string[]
  ): void;
};

type AugmentedActionContextDemo = {
  commit<K extends keyof DemoMutations>(
    key: K,
    payload: Parameters<DemoMutations[K]>[1]
  ): ReturnType<DemoMutations[K]>;
} & Omit<ActionContext<DemoState, RootState>, 'commit'>;

export interface DemoActions {
  [DemoActionTypes.GET_COURSES_DEMO](
    { commit }: AugmentedActionContextDemo,
    payload: PaginationOption
  ): Promise<Course[]>;

  [DemoActionTypes.GET_STUDENTS_DEMO](
    { commit }: AugmentedActionContextDemo,
    id: string
  ): Promise<User[]>;

  [DemoActionTypes.GET_INSTRUCTORS_DEMO](
    { commit }: AugmentedActionContextDemo,
    string: string
  ): Promise<User[]>;

  [DemoActionTypes.GET_LIST_MEMBERS_DEMO](
    _: AugmentedActionContextDemo,
    payload: ListMemberOption
  ): Promise<User[]>;

  [DemoActionTypes.GET_COURSE_DETAIL_DEMO](
    _: AugmentedActionContextDemo,
    id: string
  ): Promise<Course>;
}

export type PaginationOption = {
  page: number;
};

export type DemoStoreModule<S = DemoState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof DemoMutations,
    P extends Parameters<DemoMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<DemoMutations[K]>;
} & {
  getters: {
    [K in keyof DemoGetters]: ReturnType<DemoGetters[K]>;
  };
} & {
  dispatch<K extends keyof DemoActions>(
    key: K,
    payload?: Parameters<DemoActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<DemoActions[K]>;
};
