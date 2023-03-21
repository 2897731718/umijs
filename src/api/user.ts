import api from '../utils/request';

export function userList(params: any) {
  return api.get('/users', params);
}

export function userAdd(data: any) {
  return api.post(`/users`, data);
}

export function userDelete(key: string, data?: any) {
  return api.deletes(`/users/${key}`, data);
}

export function userPatch(key: string, data?: any) {
  return api.patch(`/users/${key}`, data);
}
