import { hyRequest } from '@/service'
import type { IAccount } from '@/store/type'
import { localCache } from '@/utils/cache.ts'
import { LOGIN_TOKEN } from '@/global/global_variables'
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/getUserInfoById`,
    params: { id },
    headers: {
      Authorization:'Bearer' + localCache.getCache(LOGIN_TOKEN)
    },
  })
}
