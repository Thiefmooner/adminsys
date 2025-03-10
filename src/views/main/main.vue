<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside class="el-aside" width="200px">Aside</el-aside>
      <el-container>
        <el-header class="el-header">Header</el-header>
        <el-main class="el-main">Main
          <button @click="quitLogin">退出登录</button>
        </el-main>
      </el-container>
    </el-container>
  </div>
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
.main{
  .main-container {

  .el-aside{
    background-color: palegoldenrod;
  }
  .el-header {
    background-color: skyblue;
  }
  .el-main{
    background-color: salmon;
  }

}






}
</style>
