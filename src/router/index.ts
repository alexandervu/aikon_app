import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProfilePage from '../components/ProfilePage.vue'
import AikonPage from '../components/AikonPage.vue'
import NotFoundPage from '../components/NotFoundPage.vue'

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
    name: 'aikonpage',
    component: AikonPage
  }, {
    path: '/profile',
    name: 'profilepage',
    component: ProfilePage
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage
  }
]

/**
 * Create and export router
 */
export const router = createRouter({
  history: createWebHistory(),
  routes
})

/**
 * Redirect to AMBASSADOR Page in case you enter the Root App
 * with ambassador path.
 */
router.beforeEach((to, from, next) => {
  if (to.path.substr(0,12) === '/ambassador/' && to.path.length > 12) {
    next(false)
    const pathMatch = [...to.params.pathMatch]
    pathMatch.shift()
    const nextPath: string = `/ambassador/?path=${encodeURIComponent(pathMatch.join('/'))}`
    window.location.href = nextPath
  } else next()
})
