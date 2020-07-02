import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Logout from '../views/Logout.vue'
import store from '../store' // your vuex store 

Vue.use(VueRouter)


const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isLoggedIn) {
    next()
        return
  }
    next('/about')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isLoggedIn) {
        next()
    return
  }
    next('/login')
}



const router = new VueRouter({
  mode: 'history',
  routes : [
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
    },
    { path: '*', redirect: '/login' },

  ]
})



export default router
