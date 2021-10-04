import { createLogger, createStore, useStore as useVuexStore } from 'vuex';
import { RootState, RootStoreModule } from '@/store/modules/root/types';
import root from '@/store/modules/root';
import { UserStoreModule } from '@/store/modules/user/type';
import { AuthStoreModule } from '@/store/modules/auth/type';
import { CourseStoreModule } from '@/store/modules/course/types';
import { InstructorStoreModule } from '@/store/modules/instructor/types';
import { StudentStoreModule } from '@/store/modules/student/types';
import { DemoStoreModule } from '@/store/modules/demo/types';
import appConfig from '@/config/app';

export type StoreModules = {
  root: RootStoreModule;
  user: UserStoreModule;
  auth: AuthStoreModule;
  course: CourseStoreModule;
  instructor: InstructorStoreModule;
  student: StudentStoreModule;
  demo: DemoStoreModule;
};

export type Store = UserStoreModule<Pick<StoreModules, 'user'>> &
  AuthStoreModule<Pick<StoreModules, 'auth'>> &
  CourseStoreModule<Pick<StoreModules, 'course'>> &
  InstructorStoreModule<Pick<StoreModules, 'instructor'>> &
  StudentStoreModule<Pick<StoreModules, 'student'>> &
  DemoStoreModule<Pick<StoreModules, 'demo'>> &
  RootStoreModule<Pick<StoreModules, 'root'>>;

export const store = createStore<RootState>({
  strict: true,
  ...root,
  plugins: appConfig.IS_LOGGING ? [createLogger()] : [],
});

export function useStore(): Store {
  return useVuexStore() as Store;
}
