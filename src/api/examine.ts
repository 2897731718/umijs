import api from '../utils/request';

export function examineList(params: any) {
  return api.post('/app/examine/list', params);
}

export function examineDelete(params: any) {
  return api.deletes('/app/examine/delete', params);
}

export function examineAdd(params: any) {
  return api.post('/app/examine/add', params);
}
