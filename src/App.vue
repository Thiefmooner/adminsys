<script setup lang="ts"></script>

<template>
  <div class="app">
    <!--这里我忘记了,为什么不能单独放置router-view,记得查一下-->
    <!--这里单独放置router-view的时候，控制台显示路径错误-->
    <router-link to="/main">主界面</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
