import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './assets/css/reset.less' //在main.ts引入reset.less
import router from './router'
import pinia from '@/store'

createApp(App).use(router).use(pinia).mount('#app')
