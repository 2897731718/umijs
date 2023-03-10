import api from '../utils/request';

export function userList(params: any) {
  return api.get('/users', params);
}

export function deleteUser(params: any) {
  return api.deletes('/users', params);
}
