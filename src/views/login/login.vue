<template>
  <div class="login">这是loginVue文件</div>
  <el-button type="primary">Primary</el-button
  ><!--step3-->
</template>

<script setup lang="ts">
import { hyRequest } from '@/service'
hyRequest
  .get({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
console.log(import.meta.env.VITE_NAME) //测试用，看VITE_NAME根据环境变化，出什么值
</script>

<style lang="less" scoped>
.login {
  color: aqua;
}
</style>
