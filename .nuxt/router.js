import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _84ca88de = () => interopDefault(import('..\\pages\\data.vue' /* webpackChunkName: "pages/data" */))
const _d0d67476 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _b3c8cb8c = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _0131ac36 = () => interopDefault(import('..\\pages\\people.vue' /* webpackChunkName: "pages/people" */))
const _70a3863e = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _4438240a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _84ca88de,
    name: "data"
  }, {
    path: "/map",
    component: _d0d67476,
    name: "map"
  }, {
    path: "/news",
    component: _b3c8cb8c,
    name: "news"
  }, {
    path: "/people",
    component: _0131ac36,
    name: "people"
  }, {
    path: "/projects",
    component: _70a3863e,
    name: "projects"
  }, {
    path: "/",
    component: _4438240a,
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
