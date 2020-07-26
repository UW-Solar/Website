import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _530b8798 = () => interopDefault(import('..\\pages\\data.vue' /* webpackChunkName: "pages/data" */))
const _144124c2 = () => interopDefault(import('..\\pages\\map.vue' /* webpackChunkName: "pages/map" */))
const _8209ca46 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _3f6cd7b5 = () => interopDefault(import('..\\pages\\partners.vue' /* webpackChunkName: "pages/partners" */))
const _60339019 = () => interopDefault(import('..\\pages\\people.vue' /* webpackChunkName: "pages/people" */))
const _6dc6b404 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _3e16fc90 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _530b8798,
    name: "data"
  }, {
    path: "/map",
    component: _144124c2,
    name: "map"
  }, {
    path: "/news",
    component: _8209ca46,
    name: "news"
  }, {
    path: "/partners",
    component: _3f6cd7b5,
    name: "partners"
  }, {
    path: "/people",
    component: _60339019,
    name: "people"
  }, {
    path: "/projects",
    component: _6dc6b404,
    name: "projects"
  }, {
    path: "/",
    component: _3e16fc90,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
