import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import(/* webpackChunkName: "about" */ './components/goods.vue')
    },
    {
      path: '/seller',
      name: 'seller',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/seller.vue')
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: () => import('./components/ratings.vue')
    }
  ]
})
