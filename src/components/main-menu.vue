<script setup lang="ts">
import {Monitor, Setting, ShoppingBag} from "@element-plus/icons-vue";

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
      <!--el-menu是整个菜单-->
      <el-menu>
        <!--4个一模一样的el-sub-menu-->
        <el-sub-menu>
          <!-- <template #title>封住了图标和span标题,图标必须这么做-->
          <!--系统总览-->
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item>核心技术</el-menu-item>
          <el-menu-item>商品统计</el-menu-item>
        </el-sub-menu>
        <!--系统管理-->
        <el-sub-menu>
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item>用户管理</el-menu-item>
          <el-menu-item>部门管理</el-menu-item>
        </el-sub-menu>
        <!--商品中心-->
        <el-sub-menu>
          <template #title>
            <el-icon><ShoppingBag/></el-icon>
            <span>商品中心</span>
          </template>
          <el-menu-item>商品细节</el-menu-item>
          <el-menu-item>商品统计</el-menu-item>
        </el-sub-menu>
        <!--随便聊天-->
        <el-sub-menu>
          <template #title>
            <el-icon><Monitor /></el-icon>
            <span>随便聊天</span>
          </template>
          <el-menu-item>会员信息</el-menu-item>
          <el-menu-item>会员统计</el-menu-item>
        </el-sub-menu>
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
