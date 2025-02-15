<template>
  <div class="login">这是loginVue文件</div>
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
</script>

<style lang="less" scoped>
.login {
  color: aqua;
}
</style>
