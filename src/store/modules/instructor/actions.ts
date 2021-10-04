import { ActionTree } from 'vuex';
import {
  InstructorActions,
  InstructorActionTypes,
  InstructorMutationTypes,
  InstructorState,
} from '@/store/modules/instructor/types';
import { RootState } from '@/store/modules/root/types';
import { InstructorService } from '@/services/instructor.service';
import { logger } from '@/utils/logger';

const instructorService = new InstructorService();

export const instructorActions: ActionTree<InstructorState, RootState> &
  InstructorActions = {
  [InstructorActionTypes.GET_INSTRUCTORS]: async ({ commit }, id: string) => {
    return new Promise((resolve, reject) => {
      try {
        instructorService
          .getListByPrograms(id)
          .then((response) => {
            if (response.data) {
              commit(InstructorMutationTypes.SET_INSTRUCTORS, response.data);
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Get Instructors of Program successful');
      }
    });
  },
};
