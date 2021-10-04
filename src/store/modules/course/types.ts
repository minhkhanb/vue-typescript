import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from 'vuex';
import { RootState } from '@/store/modules/root/types';
import { MembersOption } from '@/services/course.service';
import { User } from '@/store/modules/user/type';

enum TimeType {
  AM = 'AM',
  PM = 'PM',
}

type IDType = string;

export interface Course {
  id: IDType;
  name: string;
  description: string;
  courseCode: string;
  endDate: string;
  endTime: string;
  timeFrame: TimeType;
  organizationId: IDType;
  campusId: IDType;
  programId: IDType;
  createdBy: IDType;
  createdAt: string;
  ofStudents: number;
  ofInstructors: number;
}

export type CoursesOption = {
  id: string;
  params: MembersOption;
};

type CourseMember = {
  id: string;
  memberId: string;
};

type AddMemberOption = {
  id: string;
  params: AddMemberInput;
};

type UpdateCourse = {
  id: string;
  params: CourseInput;
};

export interface CourseInput
  extends Pick<Course, 'name' | 'endDate' | 'endTime'> {
  instructorIds: string[];
}

export interface AddMemberInput {
  userId: string;
}

export type CourseState = { courses: Course[] };

export enum CourseGetterTypes {
  COURSES = 'COURSES',
}

export type CourseGetters = {
  [CourseGetterTypes.COURSES](state: CourseState): Course[];
};

export enum CourseMutationTypes {
  SET_COURSES = 'SET_COURSES',
}

export enum CourseActionTypes {
  GET_COURSES = 'GET_COURSES',
  GET_LIST_MEMBERS = 'GET_LIST_MEMBERS',
  GET_COURSE_DETAIL = 'GET_COURSE_DETAIL',
  REMOVE_MEMBER = 'REMOVE_MEMBER',
  ADD_MEMBER = 'ADD_MEMBER',
  UPDATE_COURSE = 'UPDATE_COURSE',
  CREATE_COURSE = 'CREATE_COURSE',
}

export type CourseMutations<S = CourseState> = {
  [CourseMutationTypes.SET_COURSES](state: S, payload: Course[]): void;
};

type AugmentedActionContextCourse = {
  commit<K extends keyof CourseMutations>(
    key: K,
    payload: Parameters<CourseMutations[K]>[1]
  ): ReturnType<CourseMutations[K]>;
} & Omit<ActionContext<CourseState, RootState>, 'commit'>;

export interface CourseActions {
  [CourseActionTypes.GET_COURSES](
    { commit }: AugmentedActionContextCourse,
    payload: PaginationOption
  ): Promise<Course[]>;

  [CourseActionTypes.GET_LIST_MEMBERS](
    _: AugmentedActionContextCourse,
    payload: CoursesOption
  ): Promise<User[]>;

  [CourseActionTypes.GET_COURSE_DETAIL](
    _: AugmentedActionContextCourse,
    id: string
  ): Promise<Course>;

  [CourseActionTypes.REMOVE_MEMBER](
    _: AugmentedActionContextCourse,
    payload: CourseMember
  ): Promise<boolean>;

  [CourseActionTypes.ADD_MEMBER](
    _: AugmentedActionContextCourse,
    payload: AddMemberOption
  ): Promise<AddMemberInput>;

  [CourseActionTypes.UPDATE_COURSE](
    _: AugmentedActionContextCourse,
    payload: UpdateCourse
  ): Promise<Course>;

  [CourseActionTypes.CREATE_COURSE](
    _: AugmentedActionContextCourse,
    payload: Course
  ): Promise<Course>;
}

export type PaginationOption = {
  page: number;
};

export type CourseStoreModule<S = CourseState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof CourseMutations,
    P extends Parameters<CourseMutations[K]>[1]
  >(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<CourseMutations[K]>;
} & {
  getters: {
    [K in keyof CourseGetters]: ReturnType<CourseGetters[K]>;
  };
} & {
  dispatch<K extends keyof CourseActions>(
    key: K,
    payload?: Parameters<CourseActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<CourseActions[K]>;
};
