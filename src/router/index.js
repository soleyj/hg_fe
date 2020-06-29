import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import { mapGetters } from "vuex";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { 
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  routes
})



router.beforeEach((to, from, next) => {
  console.log(mapGetters(["isLoggedIn"]))
  if(to.matched.some(record => record.meta.requiresAuth)) {
    
    if (mapGetters(["isLoggedIn"])) {
      next()
      
      return
    }
    
    next('/login') 
  } else {
    next() 
  }
})

export default router
