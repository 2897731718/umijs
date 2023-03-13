import api from '../utils/request';

export function informationList(params: any) {
  return api.get('/information', params);
}

export function informationDelete(key: string, params?: any) {
  return api.deletes(`/information/${key}`, params);
}
