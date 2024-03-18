import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

export default router
