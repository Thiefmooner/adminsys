import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login.ts'
import type { IAccount } from '@/store/type'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)
      //console.log(loginResult)
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.name = loginResult.data.name
    }
  }
})
export default useLoginStore
