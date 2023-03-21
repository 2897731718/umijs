import api from '../utils/request';

export function applyList(params: any) {
  return api.get('/apply', params);
}

export function applyAdd(data: any) {
  return api.post(`/apply`, data);
}

export function applyDelete(key: string, data?: any) {
  return api.deletes(`/apply/${key}`, data);
}

export function applyPatch(key: string, data?: any) {
  return api.patch(`/apply/${key}`, data);
}
