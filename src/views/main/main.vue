<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside class="el-aside" width="200px">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header height="50px" class="el-header">
          <main-header></main-header>
        </el-header>
        <el-main class="el-main">Main </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache.ts'
import { LOGIN_TOKEN } from '@/global/global_variables'
import router from '@/router'
import MainMenu from '@/components/main-menu.vue'
import MainHeader from '@/components/main-header.vue'
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-container {
    height: 100%;
    .el-aside {
      background-color: #141414;
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-header {
      background-color: white;
    }
    .el-main {
      background-color: salmon;
    }
  }
}
</style>
