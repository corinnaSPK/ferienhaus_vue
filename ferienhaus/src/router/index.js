import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HousesView from '../views/HousesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
     {
      path: '/house/:path',
      name: 'house',
      // props: "true", 
      component: () => import('../views/HousesView.vue')

    },
   
 
  ], 
 scrollBehavior(to, from, savedPosition) {
  if (to.hash){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        selector: to.hash,
                        behavior: 'smooth',
                    })
                }, 500)
            })
    }
    else {
                return { x: 0, y: 0 }
            }
  }

})

export default router
