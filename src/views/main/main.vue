<template>
  <div class="main">这是mainVue文件</div>
  <button @click="quitLogin">退出登录</button>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache.ts'
import { LOGIN_TOKEN } from '@/global/global_variables'
import router from '@/router'
function quitLogin() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: aqua;
}
</style>
