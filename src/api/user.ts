import api from '../utils/request';

export function userList(params: any) {
  return api.get('/users', params);
}

export function deleteUser(key: string, params?: any) {
  return api.deletes(`/users/${key}`, params);
}
