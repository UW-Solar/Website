import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7eb5469a = () => interopDefault(import('../pages/data.vue' /* webpackChunkName: "pages/data" */))
const _00e8359c = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _67362543 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _3454ce02 = () => interopDefault(import('../pages/people.vue' /* webpackChunkName: "pages/people" */))
const _130a1b6a = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _401ac412 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/Website/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/data",
    component: _7eb5469a,
    name: "data"
  }, {
    path: "/map",
    component: _00e8359c,
    name: "map"
  }, {
    path: "/news",
    component: _67362543,
    name: "news"
  }, {
    path: "/people",
    component: _3454ce02,
    name: "people"
  }, {
    path: "/projects",
    component: _130a1b6a,
    name: "projects"
  }, {
    path: "/",
    component: _401ac412,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
