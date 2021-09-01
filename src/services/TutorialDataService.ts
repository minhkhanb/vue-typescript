import apiClient from '@/api/axios';

class TutorialDataService {
  getAll(): Promise<any> {
    return apiClient.get('/tutorials');
  }

  get(id: any) {
    return apiClient.get(`/tutorials/${id}`);
  }

  create(data: any): Promise<any> {
    return apiClient.post('/tutorials', data);
  }

  delete(id: any): Promise<any> {
    return apiClient.delete(`/tutorials/{id}`);
  }

  deleteAll(): Promise<any> {
    return apiClient.delete('/tutorials');
  }

  findByTitle(title: string): Promise<any> {
    return apiClient.get(`/tutorials?title=${title}`);
  }

  update(id: any, data: any): Promise<any> {
    return apiClient.put(`/tutorials/${id}`, data);
  }
}

export default new TutorialDataService();
