import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c7f93f82 = () => interopDefault(import('..\\pages\\data.vue' /* webpackChunkName: "pages/data" */))
const _5f645952 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _f6f78230 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _2ff84538 = () => interopDefault(import('..\\pages\\people.vue' /* webpackChunkName: "pages/people" */))
const _42b8da8f = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _66e041e6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _c7f93f82,
    name: "data"
  }, {
    path: "/map",
    component: _5f645952,
    name: "map"
  }, {
    path: "/news",
    component: _f6f78230,
    name: "news"
  }, {
    path: "/people",
    component: _2ff84538,
    name: "people"
  }, {
    path: "/projects",
    component: _42b8da8f,
    name: "projects"
  }, {
    path: "/",
    component: _66e041e6,
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
