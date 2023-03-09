import api from '../utils/request';

export function informationList(params: any) {
  return api.post('/app/information/list', params);
}

export function informationDelete(params: any) {
  return api.deletes('/app/information/delete', params);
}

export function informationAdd(params: any) {
  return api.post('/app/information/add', params);
}
