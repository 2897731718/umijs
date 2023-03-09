import api from '../utils/request';

export function login(params: any) {
  return api.post('/app/login', params);
}
export function menu(params: any) {
  return api.post('/app/menu', params);
}
