<template>
  <div class="panel">
    <!-- :model="" el-form整个表单绑定account对象-->
    <!--ref是很重要的属性，可以用于获取表单实例，不用原生jquery获取DOM-->
    <el-form
      ref="formRef"
      :model="account"
      label-width="60px"
      :rules="rules"
      status-icon
    >
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
import { reactive, ref } from 'vue'
import { type FormRules, type ElForm, ElMessage } from 'element-plus'
import { accountLoginRequest } from '@/service/login/login.ts'
import useLoginStore from '@/store/login/login.ts'
import type { IAccount } from '@/store/type'

const loginStore = useLoginStore()
const formRef = ref<InstanceType<typeof ElForm>>() //这个东西没学过，记得补一下
const account = reactive<IAccount>({
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
  pwd: [
    { required: true, message: '必须输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '长度要大于3,且由字母和数字组成',
      trigger: 'change'
    }
  ]
})
function loginAction() {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      const name = account.name
      const pwd = account.pwd
      // accountLoginRequest(account)也可以
      loginStore.loginAccountAction({ name, pwd })
    } else {
      //return false
      ElMessage.error('Oops, 达咩.')
    }
  })
}
defineExpose({
  loginAction
})
</script>

<style scoped lang="less"></style>
