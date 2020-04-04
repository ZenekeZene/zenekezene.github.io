import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Social from '../views/Social.vue';
import Portfolio from '../views/Portfolio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'networks',
    component: Social,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/networks',
    name: 'networks',
    component: Social,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: 'social',
  routes,
});

export default router;
