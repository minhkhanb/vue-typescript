import { ActionTree } from 'vuex';
import { RootState } from '@/store/modules/root/types';
import {
  CourseActions,
  CourseActionTypes,
  CourseMutationTypes,
  CourseState,
  PaginationOption,
} from '@/store/modules/course/types';
import { CourseService } from '@/services/course.service';
import { logger } from '@/utils/logger';

const courseService = new CourseService();

export const courseActions: ActionTree<CourseState, RootState> & CourseActions =
  {
    [CourseActionTypes.GET_COURSES]: (
      { commit },
      payload: PaginationOption
    ) => {
      return new Promise((resolve, reject) => {
        try {
          courseService
            .getList(payload)
            .then((response) => {
              if (response.data) {
                commit(CourseMutationTypes.SET_COURSES, response.data);
                resolve(response.data);
              }
            })
            .catch((err) => reject(err));
        } catch (err) {
          reject(err);
        } finally {
          logger.info('Get courses successful');
        }
      });
    },

    [CourseActionTypes.GET_LIST_MEMBERS]: (_, payload) => {
      return new Promise((resolve, reject) => {
        try {
          courseService
            .getListMembers(payload.id, payload.params)
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

    [CourseActionTypes.GET_COURSE_DETAIL]: (_, id) => {
      return new Promise((resolve, reject) => {
        try {
          courseService
            .getCourseDetail(id)
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

    [CourseActionTypes.REMOVE_MEMBER]: (_, payload) => {
      return new Promise((resolve, reject) => {
        try {
          courseService
            .removeMember(payload.id, payload.memberId)
            .then((response) => {
              if (response.data) {
                resolve(response.data);
              }
            })
            .catch((err) => reject(err));
        } catch (err) {
          reject(err);
        } finally {
          logger.info('Course remove member successful');
        }
      });
    },

    [CourseActionTypes.ADD_MEMBER]: (_, payload) => {
      return new Promise((resolve, reject) => {
        try {
          courseService
            .addMember(payload.id, payload.params)
            .then((response) => {
              if (response.data) {
                resolve(response.data);
              }
            })
            .catch((err) => reject(err));
        } catch (err) {
          reject(err);
        } finally {
          logger.info('Course add member successful');
        }
      });
    },

    [CourseActionTypes.UPDATE_COURSE]: (_, payload) => {
      return new Promise((resolve, reject) => {
        try {
          courseService
            .update(payload.id, payload.params)
            .then((response) => {
              if (response.data) {
                resolve(response.data);
              }
            })
            .catch((err) => reject(err));
        } catch (err) {
          reject(err);
        } finally {
          logger.info('Update course successful');
        }
      });
    },

    [CourseActionTypes.CREATE_COURSE]: (_, payload) => {
      return new Promise((resolve, reject) => {
        try {
          courseService
            .create(payload)
            .then((response) => {
              if (response.data) {
                resolve(response.data);
              }
            })
            .catch((err) => reject(err));
        } catch (err) {
          reject(err);
        } finally {
          logger.info('Create course successful');
        }
      });
    },
  };
