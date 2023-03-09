import api from '../utils/request';

export function userList(params: any) {
  return api.post('/app/news/list', params);
}

export function deleteUser(params: any) {
  return api.deletes('/app/news/delete', params);
}
