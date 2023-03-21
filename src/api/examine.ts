import api from '../utils/request';

export function examineList(params: any) {
  return api.get('/examine', params);
}

export function examineAdd(data: any) {
  return api.post(`/examine`, data);
}

export function examineDelete(key: string, data?: any) {
  return api.deletes(`/examine/${key}`, data);
}

export function examinePatch(key: string, data?: any) {
  return api.patch(`/examine/${key}`, data);
}
