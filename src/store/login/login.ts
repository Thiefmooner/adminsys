import { defineStore } from 'pinia'
import {accountLoginRequest, getUserInfoById, getUserMenusByRoleId} from '@/service/login/login.ts'
import type { IAccount } from '@/store/type'
import { localCache } from '@/utils/cache.ts'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/global_variables'
interface ILogin {
  token: string,
  userInfo: any,
  userMenus:any
}
const useLoginStore = defineStore('login', {
  state: ():ILogin => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    userInfo:{},
    userMenus:{},
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)
      //1.登录获取token等信息
      const id = loginResult.data.id
      this.token = loginResult.data.token

      //2.localStorage本地缓存token
      localCache.setCache(LOGIN_TOKEN, this.token)

      //3.获取用户详情信息role
      const userInfoRes = await getUserInfoById(id)
      this.userInfo = userInfoRes.data
      //4.获取用户菜单
      const userMenuRes = await getUserMenusByRoleId(this.userInfo.role.id)
      this.userMenus = userMenuRes.data

      //5.转到main
      router.push('/main')
    }
  }
})
export default useLoginStore
