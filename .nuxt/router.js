import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2f5b6050 = () => interopDefault(import('..\\pages\\data.vue' /* webpackChunkName: "pages/data" */))
const _49f3e6c4 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _5e59a2fe = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _5c554abd = () => interopDefault(import('..\\pages\\people.vue' /* webpackChunkName: "pages/people" */))
const _2f3754b0 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _0a1ee294 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2f5b6050,
    name: "data"
  }, {
    path: "/map",
    component: _49f3e6c4,
    name: "map"
  }, {
    path: "/news",
    component: _5e59a2fe,
    name: "news"
  }, {
    path: "/people",
    component: _5c554abd,
    name: "people"
  }, {
    path: "/projects",
    component: _2f3754b0,
    name: "projects"
  }, {
    path: "/",
    component: _0a1ee294,
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
