import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/views/Top.vue'
import About from '@/views/About'
import Event from '@/views/Event'
import Logs from '@/views/Logs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/event',
      name: 'event',
      component: Event
    },
    {
      path: '/logs',
      name: 'logs',
      component: Logs
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    const position = savedPosition || { x: 0, y: 0 }
    return new Promise((resolve) => {
      this.app.$root.$once('triggerScroll', () => {
        this.app.$nextTick(() => {
          window.scrollTo({ top: position.y, left: position.x })
          resolve(position)
        })
      })
    })
  }
})
