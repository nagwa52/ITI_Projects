import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import studentView from '../views/studentView.vue'


const routes = [
  {
    path: '/',
    name: 'FormView',
    component: FormView
  },
  {
    path: '/student',
    name: 'studentView',
    component: studentView
  },
  {
    path: '/admin',
    name: 'AdminView',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
