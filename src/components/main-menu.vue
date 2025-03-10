<script setup lang="ts">
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="main-menu">
    <!--logo-->
    <div class="menu-logo">
      <img src="@/assets/image/logo.svg" alt="logo" /><!--这里图标用../asset开头不行-->
      <h2 class="title">后台管理系统</h2>
    </div>
    <!--菜单-->
    <div class="menu">
      <!--1.el-menu是整个菜单-->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <!--2.el-sub-menu是第一级子菜单，且可以展开-->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <!--3.el-menu-item-group是给el-menu-item分组用的，且不能展开，不能交互-->
          <el-menu-item-group title="Group One">
            <!--4.el-menu-item是可以点击的小item-->
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang="less">
.main-menu {

  .menu-logo{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    height: 28px;
    padding: 12px 10px 8px 10px;
    img{
      height: 100%;
      margin: 0 10px;
    }
    .title{
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
  .menu{

  }
}
</style>
