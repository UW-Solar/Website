import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _586dd2ca = () => interopDefault(import('../pages/data.vue' /* webpackChunkName: "pages/data" */))
const _b6553928 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _40eeb173 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _339bd92f = () => interopDefault(import('../pages/people.vue' /* webpackChunkName: "pages/people" */))
const _08410f9a = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _c518843c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _586dd2ca,
    name: "data"
  }, {
    path: "/map",
    component: _b6553928,
    name: "map"
  }, {
    path: "/news",
    component: _40eeb173,
    name: "news"
  }, {
    path: "/people",
    component: _339bd92f,
    name: "people"
  }, {
    path: "/projects",
    component: _08410f9a,
    name: "projects"
  }, {
    path: "/",
    component: _c518843c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
