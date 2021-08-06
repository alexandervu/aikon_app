import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UsersPage from '../components/UsersPage.vue'
import MenuPage from '../components/MenuPage.vue'

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
    name: 'menupage',
    component: MenuPage
  }, {
    path: '/users',
    name: 'userspage',
    component: UsersPage
  }
]

export const router = createRouter({
  history: createWebHistory('/ambassador/'),
  routes
})
