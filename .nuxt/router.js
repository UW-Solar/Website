import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7943bdf2 = () => interopDefault(import('../pages/data.vue' /* webpackChunkName: "pages/data" */))
const _55b3d98f = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _a84200a0 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _b89ce7a8 = () => interopDefault(import('../pages/people.vue' /* webpackChunkName: "pages/people" */))
const _6c941152 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _dee59176 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/data",
    component: _7943bdf2,
    name: "data"
  }, {
    path: "/map",
    component: _55b3d98f,
    name: "map"
  }, {
    path: "/news",
    component: _a84200a0,
    name: "news"
  }, {
    path: "/people",
    component: _b89ce7a8,
    name: "people"
  }, {
    path: "/projects",
    component: _6c941152,
    name: "projects"
  }, {
    path: "/",
    component: _dee59176,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
