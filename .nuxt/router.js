import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e0c575a = () => interopDefault(import('..\\pages\\data.vue' /* webpackChunkName: "pages/data" */))
const _53e7e648 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _368d3603 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _3bab79bf = () => interopDefault(import('..\\pages\\people.vue' /* webpackChunkName: "pages/people" */))
const _4aeacc2a = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _5ba5cb52 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4e0c575a,
    name: "data"
  }, {
    path: "/map",
    component: _53e7e648,
    name: "map"
  }, {
    path: "/news",
    component: _368d3603,
    name: "news"
  }, {
    path: "/people",
    component: _3bab79bf,
    name: "people"
  }, {
    path: "/projects",
    component: _4aeacc2a,
    name: "projects"
  }, {
    path: "/",
    component: _5ba5cb52,
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
