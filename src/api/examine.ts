import api from '../utils/request';

export function examineList(params: any) {
  return api.get('/examine', params);
}

export function examineDelete(key: string, params?: any) {
  return api.deletes(`/examine/${key}`, params);
}
