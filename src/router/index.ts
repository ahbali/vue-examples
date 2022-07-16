import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/github',
      name: 'github',
      component: () => import('@/components/GithubComponent.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('@/views/GridView.vue'),
    },
    {
      path: '/tree',
      name: 'tree',
      component: () => import('@/views/TreeView.vue'),
    },
    {
      path: '/svg',
      name: 'svg',
      component: () => import('@/views/SvgView.vue'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('@/views/ModalView.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('@/views/ListView.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('@/views/TodoMVCView.vue'),
    },
  ],
})

export default router
