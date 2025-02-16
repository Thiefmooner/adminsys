<template>
  <div class="login">这是loginVue文件</div>
  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <el-slider v-model="value1" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
console.log(import.meta.env.VITE_NAME) //测试用，看VITE_NAME根据环境变化，出什么值
const value1 = ref(0)
</script>

<style lang="less" scoped>
.login {
  color: aqua;
}
.slider-demo-block {
  max-width: 600px;
  display: flex;
  align-items: center;
}
</style>
