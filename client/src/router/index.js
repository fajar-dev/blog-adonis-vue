import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'user.index',
      component: () => import('@/views/user/Index.vue')
    },
    {
      path: '/create',
      name: 'user.create',
      component: () => import('@/views/user/Create.vue')
    },
    {
      path: '/edit/:id',
      name: 'user.edit',
      component: () => import('@/views/user/Edit.vue')
    },
  ]
})

export default router
