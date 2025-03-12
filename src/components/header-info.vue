<template>
  <div class="header-info">
    <!--一些小图标-->
    <div class="operation">
      <span>
        <el-icon><Message /></el-icon>
      </span>
      <span>
        <span class="dot"></span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Search /></el-icon>
      </span>
    </div>
    <!--个人信息，下拉菜单-->
    <div class="info">
      <el-dropdown>
        <span class="user-info"
          ><el-avatar
            :size="30"
            src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
          />
          <span class="name"> kkkkk </span></span
        >
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="Exit">
              <el-icon> <CircleClose /> </el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon> <CircleClose /> </el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon> <CircleClose /> </el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChatDotRound,
  CircleClose,
  Message,
  Search
} from '@element-plus/icons-vue'
import { localCache } from '@/utils/cache.ts'
import { LOGIN_TOKEN } from '@/global/global_variables'
import router from '@/router'
function Exit() {
  localCache.removeCache(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style scoped lang="less">
.header-info {
  display: flex;
  align-items: center;
}

/*解决黑框问题*/
.user-info:focus {
  outline: none;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  .name {
    margin-left: 5px;
  }
}

/*注意:要global获取全局类，因为el-dropdown-menu__item 渲染到页面上后，是不在id="app"那里面的*/
.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
.operation {
  display: inline-flex;
  margin-right: 20px;
  span {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    &:hover {
      background: #f2f2f2;
    }
    i {
      font-size: 20px;
    }
    .dot {
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 10;
      width: 6px;
      height: 6px;
      background: red;
      border-radius: 100%;
    }
  }
}
</style>
