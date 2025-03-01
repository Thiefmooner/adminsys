import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login.ts'
import type { IAccount } from '@/store/type'
import { localCache } from '@/utils/cache.ts'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache('token') ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)
      //1.登录获取token等信息
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.name = loginResult.data.name

      //2.localStorage本地缓存token
      //localStorage.setItem('token', this.token)
      localCache.setCache('token', this.token)
    }
  }
})
export default useLoginStore
