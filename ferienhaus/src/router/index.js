import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HousesView from '../views/HousesView.vue'

  const wait = function(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
const tryScrollToAnchor = async (hash, timeout = 1000, delay = 100)=> {
  while (timeout > 0) {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      break;
    }
    await wait(delay);
    timeout = timeout - delay;
  }
};
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
  if (to.hash) {
    // Required because our <RouterView> is wrapped in a <Transition>
    // So elements are mounted after a delay
    console.log(to.hash);
    tryScrollToAnchor(to.hash, 1000, 100);
  }
  /*  else if (savedPosition) {
    return savedPosition;
  } */
   else {
    return { top:0 };
  }
}

//  scrollBehavior(to, from, savedPosition) {

  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: 'smooth',
  //     }
  //   }
  //   else {
  // return {top:0}

  //   }

  // }

})

export default router
