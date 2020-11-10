import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f6c9a7a = () => interopDefault(import('../pages/data.vue' /* webpackChunkName: "pages/data" */))
const _d7f23488 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _37ed7923 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _660774df = () => interopDefault(import('../pages/people.vue' /* webpackChunkName: "pages/people" */))
const _4e347f4a = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _f364279c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/data",
    component: _4f6c9a7a,
    name: "data"
  }, {
    path: "/map",
    component: _d7f23488,
    name: "map"
  }, {
    path: "/news",
    component: _37ed7923,
    name: "news"
  }, {
    path: "/people",
    component: _660774df,
    name: "people"
  }, {
    path: "/projects",
    component: _4e347f4a,
    name: "projects"
  }, {
    path: "/",
    component: _f364279c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
