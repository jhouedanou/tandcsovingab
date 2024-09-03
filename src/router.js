import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import ThankYou from './components/ThankYou.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/merci', component: ThankYou }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router