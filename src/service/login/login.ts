import { hyRequest } from '@/service'
import type { IAccount } from '@/store/type'
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}
