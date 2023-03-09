import api from '../utils/request';

export function homeList(params: any) {
  return api.post('/app/home/list', params);
}

export function homeDelete(params: any) {
  return api.deletes('/app/home/delete', params);
}

export function homeAdd(params: any) {
  return api.post('/app/home/add', params);
}
