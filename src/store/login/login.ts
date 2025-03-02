import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login.ts'
import type { IAccount } from '@/store/type'
import { localCache } from '@/utils/cache.ts'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/global_variables'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
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
      localCache.setCache(LOGIN_TOKEN, this.token)

      //3.转到main
      router.push('/main')
    }
  }
})
export default useLoginStore
