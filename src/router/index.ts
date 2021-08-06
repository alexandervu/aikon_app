import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProfilePage from '../components/ProfilePage.vue'
import AikonPage from '../components/AikonPage.vue'

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean
    // must be declared by every route
    requiresAuth?: boolean
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'aikonpage',
    component: AikonPage
  }, {
    path: '/profile',
    name: 'profilepage',
    component: ProfilePage
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
