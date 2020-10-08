import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'QForm',
    component: () => import('../views/QForm')
  },
  {
    path: '/quest',
    name: 'Quest',
    component: () => import('../views/QuestView')
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('../views/Results')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
