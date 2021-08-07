import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UsersPage from '../components/UsersPage.vue'
import MenuPage from '../components/MenuPage.vue'
// When you want to use #history use 'createWebHashHistory'
declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean
    // must be declared by every route
    requiresAuth?: boolean
  }
}

/**
 * Define routes
 */
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

/**
 * Create and export router
 */
export const router = createRouter({
  history: createWebHistory('/ambassador/'),
  routes
})

/**
 * When entring the root path with path information
 * from Root App, navigate to prefered path.
 */
router.beforeEach((to, from, next) => {
  if (to.path === '/' && to.query.path) {
    const nextPath: string = to.query.path.toString() || '/'
    next({ path: nextPath })
  } else next()
})
