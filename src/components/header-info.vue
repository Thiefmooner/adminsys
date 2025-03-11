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
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatDotRound, Message, Search } from '@element-plus/icons-vue'
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
