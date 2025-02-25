import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/reset.less' //在main.ts引入reset.less
import router from './router'
import pinia from '@/store'
import registerIcons from '@/global/register-icons.ts'

createApp(App).use(router).use(registerIcons).use(pinia).mount('#app')
