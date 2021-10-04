import { createLogger, createStore, useStore as useVuexStore } from 'vuex';
import { RootState, RootStoreModule } from '@/store/modules/root/types';
import root from '@/store/modules/root';
import { AuthStoreModule } from '@/store/modules/auth/type';
import appConfig from '@/common/config/app';

export type StoreModules = {
  root: RootStoreModule;
  auth: AuthStoreModule;
};

export type Store = AuthStoreModule<Pick<StoreModules, 'auth'>> &
  RootStoreModule<Pick<StoreModules, 'root'>>;

export const store = createStore<RootState>({
  strict: true,
  ...root,
  plugins: appConfig.IS_LOGGING ? [createLogger()] : [],
});

export function useStore(): Store {
  return useVuexStore() as Store;
}
