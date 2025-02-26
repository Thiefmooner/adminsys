<template>
  <div class="panel">
    <!-- :model="" el-form整个表单绑定account对象-->
    <el-form 定:model="account" label-width="60px" :rules="rules">
      <!--这个prop非常重要，他标识着，el-form绑的rules到了账号这里要寻找name的规则-->
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="account.pwd" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
const account = reactive({
  name: '',
  pwd: ''
})
//定义校验规则
const rules: FormRules = reactive({
  name: [
    { required: true, message: '必须输入', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '长度要在6-20,且由字母和数字组成',
      trigger: 'change'
    }
  ],
  pwd: [{ required: true, message: '必须输入密码', trigger: 'blur' }]
})
</script>

<style scoped lang="less"></style>
