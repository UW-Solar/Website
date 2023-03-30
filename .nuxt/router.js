import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _239e6752 = () => interopDefault(import('..\\pages\\data.vue' /* webpackChunkName: "pages/data" */))
const _0e7c1de4 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _0c1f45fb = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _160d2892 = () => interopDefault(import('..\\pages\\people.vue' /* webpackChunkName: "pages/people" */))
const _2ef7bfbc = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _3855ba5a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _239e6752,
    name: "data"
  }, {
    path: "/map",
    component: _0e7c1de4,
    name: "map"
  }, {
    path: "/news",
    component: _0c1f45fb,
    name: "news"
  }, {
    path: "/people",
    component: _160d2892,
    name: "people"
  }, {
    path: "/projects",
    component: _2ef7bfbc,
    name: "projects"
  }, {
    path: "/",
    component: _3855ba5a,
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
