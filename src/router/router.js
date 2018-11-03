import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About/About'
import Phone from '@/components/About/Phone'
import Photo from '@/components/About/Photo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/About',
      name: 'About',
      component: About,
      children: [
        {
          path: '/About/Phone',
          name: 'Phone',
          component: Phone
        },
        {
          path: '/About/Photo',
          name: 'Photo',
          component: Photo
        },
      ]
    },
  ]
})
