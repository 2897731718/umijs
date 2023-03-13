import api from '../utils/request';

export function applyList(params: any) {
  return api.get('/apply', params);
}

export function applyDelete(key: string, params?: any) {
  return api.deletes(`/apply/${key}`, params);
}
