import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'QForm',
    component: () => import('../views/QForm.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
