import api from '../utils/request';

export function informationList(params: any) {
  return api.get('/information', params);
}

export function informationAdd(data: any) {
  return api.post(`/information`, data);
}

export function informationDelete(key: string, data?: any) {
  return api.deletes(`/information/${key}`, data);
}

export function informationPatch(key: string, data?: any) {
  return api.patch(`/information/${key}`, data);
}
