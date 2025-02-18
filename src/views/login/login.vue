<template>
  <div class="login">这是loginVue文件</div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%; //为什么这里宽高可以使用100%了?因为父级APP已经占满了
  height: 100%;
  background: url('@/assets/image/login-bg.svg'); //改成@开头就好了，..开头提示有错误
}
</style>
