import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue2TouchEvents from 'vue2-touch-events'
import vuescroll from 'vue-scroll'
import App from './App.vue'
import router from './router';
import store from './store';

import './registerServiceWorker'
import 'swiper/css/swiper.css'
import './assets/main.scss'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
Vue.use(Vue2TouchEvents)
Vue.use(vuescroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
