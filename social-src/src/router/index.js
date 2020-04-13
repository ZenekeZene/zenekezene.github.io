import Vue from 'vue';
import VueRouter from 'vue-router';
import Experience from '../views/Experience.vue';
import Social from '../views/Social.vue';
import Portfolio from '../views/Portfolio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'default',
    component: Social,
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience,
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
