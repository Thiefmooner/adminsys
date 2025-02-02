<template>
  <div class="main">
    这是mainVue文件,这是counter的值{{ counterStore.counter }}
  </div>
  <button @click="changeNumFunc">点击改变数字</button>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter.ts'
const counterStore = useCounterStore()

const changeNumFunc = () => {
  counterStore.changeCounterAction(64)
}
</script>

<style lang="less" scoped>
.main {
  color: aqua;
}
</style>
