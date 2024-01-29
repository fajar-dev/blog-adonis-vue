import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'user.index',
      component: () => import('@/views/Index.vue')
    },
    {
      path: '/create',
      name: 'user.create',
      component: () => import('@/views/post/Create.vue')
    },
    {
      path: '/post/:slug',
      name: 'post.show',
      component: () => import('@/views/post/show.vue')
    },
  ]
})

export default router
