import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/reset.less' //在main.ts引入reset.less
import router from './router'
import pinia from '@/store'
import registerIcons from '@/global/register-icons.ts'
import 'element-plus/theme-chalk/el-message.css' //这里有坑，需要手动引入下css，可能是之前装的插件不支持

createApp(App).use(router).use(registerIcons).use(pinia).mount('#app')
