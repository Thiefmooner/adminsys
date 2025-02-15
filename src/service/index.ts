import { BASE_URL, TIME_OUT } from '@/service/config'
import HYRequest from './request'

export const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
