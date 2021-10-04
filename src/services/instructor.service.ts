import apiClient from '@/api';
import { User } from '@/store/modules/user/type';
import { AxiosResponse } from 'axios';

export class InstructorService {
  public listByPrograms(programsId: string): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>(`/programs/:programsId/instructors`, {
      programsId,
    });
  }

  public getListByPrograms(id: string): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>(`/programs/:id/instructors`, { id });
  }

  public getStudentsByPrograms(id: string): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>(`/programs/:id/students`, { id });
  }

  public getInstructorByProgramsDemo(
    id: string
  ): Promise<AxiosResponse<User[]>> {
    const uri = `/demo/programs/:id/instructors`;
    return apiClient.get<User[]>(uri, { id });
  }

  public getStudentsByProgramsDemo(id: string): Promise<AxiosResponse<User[]>> {
    return apiClient.get<User[]>(`/demo/programs/:id/students`, { id });
  }
}
