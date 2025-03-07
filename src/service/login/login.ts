import { request } from '@/service'
import type { IAccount } from '@/store/type'
import { localCache } from '@/utils/cache.ts'
import { LOGIN_TOKEN } from '@/global/global_variables'
export function accountLoginRequest(account: IAccount) {
  return request.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return request.get({
    url: `/users/${id}`,
  })
}

export function getUserMenusByRoleId(id: number) {
  return request.get({
    url: `/role/${id}/menu`,
  })

}
