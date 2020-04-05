import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App.vue'
import router from './router';
import store from './store';

import './registerServiceWorker'
import 'swiper/css/swiper.css'
import './assets/main.scss'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
