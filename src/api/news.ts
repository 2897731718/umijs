import api from '../utils/request';

export function newsList(params: any) {
  return api.post('/app/news/list', params);
}

export function newsDelete(params: any) {
  return api.deletes('/app/news/delete', params);
}

export function newsAdd(params: any) {
  return api.post('/app/news/add', params);
}
