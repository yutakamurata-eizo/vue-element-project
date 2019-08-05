import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Basic from './views/basic/index.vue'
import Layout from './views/basic/layout.vue'
import Container from './views/basic/container.vue'
import Color from './views/basic/color.vue'
import Button from './views/basic/button.vue'
import Link from './views/basic/link.vue'
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
    {
      path: '/basic/layout',
      name: 'basic/layout',
      component: Layout,
    },
    {
      path: '/basic/container',
      name: 'basic/container',
      component: Container,
    },
    {
      path: '/basic/color',
      name: 'basic/color',
      component: Color,
    },
    {
      path: '/basic/button',
      name: 'basic/button',
      component: Button,
    },
    {
      path: '/basic/link',
      name: 'basic/link',
      component: Link,
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
