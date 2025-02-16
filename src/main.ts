import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/reset.less' //在main.ts引入reset.less
import router from './router'
import pinia from '@/store'

import ElementPlus from 'element-plus' //step1
import 'element-plus/dist/index.css' //step2
//全局注册很简单明了
createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app')
