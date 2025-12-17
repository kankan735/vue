import { createRouter, createWebHistory } from 'vue-router'

// 把你写的 vue1.vue 当作首页
import Vue1 from '../components/vue1.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      component: Vue1  // 访问根目录时，显示 vue1
    },
    // 你可以在这里继续添加其他页面，比如列表页
    // { path: '/list', component: () => import('../components/List.vue') }
  ]
})

export default router