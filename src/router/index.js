import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Browse from '@/components/Browse'
import Saved from '@/components/Saved'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Browse',
      component: Browse
    },
    {
    	path: '/saved',
    	name: 'Saved',
    	component: Saved
    }
  ]
})
