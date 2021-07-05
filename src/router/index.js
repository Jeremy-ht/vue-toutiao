import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Index')
  },
  {
    path: '/',
    component: () => import('../views/layout/Index'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/Index')
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('../views/qa/Index')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video/Index')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my/Index')
      }
    ]

  }
]

const router = new VueRouter({
  routes
})

export default router
