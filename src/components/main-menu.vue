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
      <el-menu text-color="#b7bdc3" active-text-color="#fff" background-color="#001529">
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id+''">
            <template #title>
              <!--动态组件，可以实现不同的el-sub-menu显示不同的icon，但是需要注意后端返回的结构-->
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{item.name}}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id+''">{{subItem.name}}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from "@/store/login/login.ts";

//1.获取登录那边store的信息
const LoginStore = useLoginStore();
const userMenus = LoginStore.userMenus;
console.log(userMenus);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

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
}
.el-menu{
  border-right:none;
  user-select: none;
}
.el-sub-menu{
  .el-menu-item{
    padding-left: 50px !important;
    background-color: black;
  }
  .el-menu-item:hover{
    color: white;
  }
  .el-menu-item.is-active{
    color: blue;
  }
}
</style>
