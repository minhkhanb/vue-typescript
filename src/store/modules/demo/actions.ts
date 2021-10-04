import { ActionTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import {
  DemoActions,
  DemoActionTypes,
  DemoMutationTypes,
  DemoState,
  PaginationOption,
} from '@/store/modules/demo/types';
import { InstructorService } from '@/services/instructor.service';
import { CourseService } from '@/services/course.service';
import { logger } from '@/utils/logger';

const instructorService = new InstructorService();
const courseService = new CourseService();

export const demoActions: ActionTree<DemoState, RootState> & DemoActions = {
  [DemoActionTypes.GET_COURSES_DEMO]: (
    { commit },
    payload: PaginationOption
  ) => {
    return new Promise((resolve, reject) => {
      try {
        courseService
          .getListDemo(payload)
          .then((response) => {
            if (response.data) {
              commit(DemoMutationTypes.SET_COURSES_DEMO, response.data);
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Get courses demo successful');
      }
    });
  },

  [DemoActionTypes.GET_INSTRUCTORS_DEMO]: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      try {
        instructorService
          .getInstructorByProgramsDemo(id)
          .then((response) => {
            if (response.data) {
              commit(DemoMutationTypes.SET_INSTRUCTORS_DEMO, response.data);
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (error) {
        commit(DemoMutationTypes.SET_INSTRUCTORS_DEMO, []);
      } finally {
        logger.info('Get instructors demo successful');
      }
    });
  },

  [DemoActionTypes.GET_STUDENTS_DEMO]: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      try {
        instructorService
          .getStudentsByProgramsDemo(id)
          .then((response) => {
            if (response.data) {
              commit(DemoMutationTypes.SET_STUDENTS_DEMO, response.data);
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      }
    });
  },

  [DemoActionTypes.GET_LIST_MEMBERS_DEMO]: (_, payload) => {
    return new Promise((resolve, reject) => {
      try {
        courseService
          .getListMembersDemo(payload.id, payload.params)
          .then((response) => {
            if (response.data) {
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Get list members of course successful');
      }
    });
  },

  [DemoActionTypes.GET_COURSE_DETAIL_DEMO]: (_, id) => {
    return new Promise((resolve, reject) => {
      try {
        courseService
          .getCourseDetailDemo(id)
          .then((response) => {
            if (response.data) {
              resolve(response.data);
            }
          })
          .catch((err) => reject(err));
      } catch (err) {
        reject(err);
      } finally {
        logger.info('Get course detail successful');
      }
    });
  },
};
