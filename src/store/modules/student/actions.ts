import { ActionTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import {
  StudentActions,
  StudentActionTypes,
  StudentMutationTypes,
  StudentState,
} from '@/store/modules/student/types';
import { InstructorService } from '@/services/instructor.service';
import { logger } from '@/utils/logger';

const instructorService = new InstructorService();

export const studentActions: ActionTree<StudentState, RootState> &
  StudentActions = {
  [StudentActionTypes.GET_STUDENTS]: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      try {
        instructorService.getStudentsByPrograms(id).then((response) => {
          if (response.data) {
            commit(StudentMutationTypes.SET_STUDENTS, response.data);
            resolve(response.data);
          }
        });
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Get students successful');
      }
    });
  },
};
