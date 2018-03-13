import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import VueContentPlaceholders from 'vue-content-placeholders'

Vue.use(VueRouter);
Vue.use(VueContentPlaceholders);

import App from './App'
const Home = () => import('./components/Home.vue')
const Data = () => import('./components/Data.vue')
const routes = [
  {path:'/',component:Home},
  {path:'/data/:type',component:Data},
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  el: '#app',
  router,
  render:h=>h(App)
});
