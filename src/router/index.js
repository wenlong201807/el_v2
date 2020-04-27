import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AA from '@/components/aa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bb',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aa',
      name: 'AA',
      component: AA
    }
  ]
})
