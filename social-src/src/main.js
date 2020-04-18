import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue2TouchEvents from 'vue2-touch-events'
import vuescroll from 'vue-scroll'
import App from './App.vue'
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload'


import './scripts/registerServiceWorker'
import 'swiper/css/swiper.css'
import './assets/styles/main.scss'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(Vue2TouchEvents)
Vue.use(vuescroll)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/img/warning.svg',
  loading: '/img/spinner.svg',
  attempt: 1,
  listenEvents: [
    'scroll',
    'wheel',
    'mousewheel',
    'touchmove']
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
