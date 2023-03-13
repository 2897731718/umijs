import api from '../utils/request';

export function newsList(params: any) {
  return api.get('/news', params);
}

export function newsDelete(key: string, params?: any) {
  return api.deletes(`/news/${key}`, params);
}
