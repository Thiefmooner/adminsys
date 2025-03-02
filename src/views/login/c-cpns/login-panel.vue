<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <div class="tabs">
      <!--activeName是选中tabs的name值，
      你选择哪个tabs，activeName就是那个tabs的name值-->
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账号登录" name="account">
          <template #label>
            <div class="label">
              <el-icon><user-filled /></el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <AccountPanel ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Cellphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <div>hhh</div>
          <div>hhhhh</div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="control-account">
      <el-checkbox v-model="isRemember" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="listenLoginAction"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AccountPanel from '@/views/login/c-cpns/account-panel.vue'

import { Cellphone, UserFilled } from '@element-plus/icons-vue'

const accountRef = ref<InstanceType<typeof AccountPanel>>()
const activeName = ref('account')
const isRemember = ref(false) //记住密码默认没选择
const listenLoginAction = function () {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction(isRemember.value)
  } else {
    console.log('手机号登录')
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;
  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .control-account {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
    //--el-button-size: 50px;
  }
}

.label {
  display: flex;
  align-items: center;
  justify-content: center;
  .text {
    margin-left: 10px;
  }
}
</style>
