<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenu">
      <el-icon>
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumbs">面包屑</div>
      <div class="info">
        <HeaderInfo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderInfo from '@/components/header-info.vue' //./header-info.vue路径报错
const isFold = ref(false)
function handleMenu() {
  isFold.value = !isFold.value
  console.log(isFold.value)
}
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
