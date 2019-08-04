import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Basic from './views/basic/index.vue'
import Data from './views/data/index.vue'
import Form from './views/form/index.vue'
import Navigation from './views/navigation/index.vue'
import Notice from './views/notice/index.vue'
import Others from './views/others/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // === Basic start ===
    {
      path: '/basic',
      name: 'basic',
      component: Basic,
    },
    // === Basic end ===
    // === Data start ===
    {
      path: '/data',
      name: 'data',
      component: Data,
    },
    // === Data end ===
    // === Form start ===
    {
      path: '/form',
      name: 'form',
      component: Form,
    },
    // === Form end ===
    // === Navigation start ===
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation,
    },
    // === Navigation end ===
    // === Notice start ===
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
    },
    // === Notice end ===
    // === Others start ===
    {
      path: '/others',
      name: 'others',
      component: Others,
    },
    // === Others end ===
  ],
})
