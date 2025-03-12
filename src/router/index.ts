import { createRouter, createWebHashHistory } from 'vue-router'
import { localCache } from '@/utils/cache.ts'
import { LOGIN_TOKEN } from '@/global/global_variables'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main' //预留路由导航首位，未登录状态下，回到登录
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/notFound.vue')
    }
  ]
})

const localRoutes = [
  {
    path: '/main/analysis/dashboard',
    component: () => import('../views/main/analysis/dashboard/dashboard.vue')
  },
  {
    path: '/main/analysis/overview',
    component: () => import('../views/main/analysis/overview/overview.vue')
  },
  {
    path: '/main/system/role',
    component: () => import('../views/main/system/role/role.vue')
  },
  {
    path: '/main/system/user',
    component: () => import('../views/main/system/user/user.vue')
  }
]
router.addRoute('main', localRoutes[0])
router.addRoute('main', localRoutes[1])

//导航守卫
//返回值决定导航的路径
router.beforeEach((to, from) => {
  //如果访问main，先检查是否有token
  if (to.path === '/main') {
    const token = localCache.getCache(LOGIN_TOKEN)
    if (!token) {
      return '/login'
    }
  }
})
export default router
