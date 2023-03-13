import api from '../utils/request';

export function homeList(params: any) {
  return api.get('/home', params);
}

export function homeDelete(key: string, params?: any) {
  return api.deletes(`/home/${key}`, params);
}
