import { RequestOptionsInit } from 'umi-request';
import api from '../utils/request';

export function login(params: any) {
  return api.post('/app/login', params);
}
