import apiClient from '@/api';
import {
  AddMemberInput,
  Course,
  CourseInput,
  PaginationOption,
} from '@/store/modules/course/types';
import { User, UserRoles } from '@/store/modules/user/type';
import { AxiosResponse } from 'axios';

export interface FilterOption {
  role: UserRoles;
}

export interface MembersOption {
  filter: UserRoles;
}

export class CourseService {
  public create(params: Course): Promise<AxiosResponse<Course>> {
    return apiClient.post<Course>('/courses/create', undefined, params);
  }
  public update(
    id: string,
    params: CourseInput
  ): Promise<AxiosResponse<Course>> {
    return apiClient.put<Course>(`/courses/:id/update`, { id }, params);
  }

  public list(params: PaginationOption): Promise<AxiosResponse<Course[]>> {
    return apiClient.get<Course[]>('/courses', params);
  }

  public getList(params: PaginationOption): Promise<AxiosResponse<Course[]>> {
    return apiClient.get<Course[]>('/courses', params);
  }

  public getListDemo(
    params: PaginationOption
  ): Promise<AxiosResponse<Course[]>> {
    return apiClient.get<Course[]>('/demo/courses', params);
  }

  public detail(id: string): Promise<AxiosResponse> {
    return apiClient.get(`/courses/:id`, { id });
  }

  public getCourseDetail(id: string): Promise<AxiosResponse<Course>> {
    return apiClient.get<Course>(`/courses/:id`, { id });
  }

  public getCourseDetailDemo(id: string): Promise<AxiosResponse<Course>> {
    return apiClient.get<Course>(`/demo/courses/:id`, { id });
  }

  public addMember(
    id: string,
    params: AddMemberInput
  ): Promise<AxiosResponse<AddMemberInput>> {
    return apiClient.post<AddMemberInput>(
      `/course/:id/user/add`,
      { id },
      params
    );
  }

  public listMembers(
    id: string,
    params: MembersOption
  ): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>(`/course/:id/users`, { id }, { params });
  }

  public getListMembers(
    id: string,
    params: MembersOption
  ): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>(`/course/:id/users`, { id }, { params });
  }

  public getListMembersDemo(
    id: string,
    params: FilterOption
  ): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>(`/demo/course/:id/users`, { id }, { params });
  }

  public removeMember(
    id: string,
    memberId: string
  ): Promise<AxiosResponse<boolean>> {
    return apiClient.delete<boolean>(`/course/:id/user/:memberId/delete`, {
      id,
      memberId,
    });
  }
}
