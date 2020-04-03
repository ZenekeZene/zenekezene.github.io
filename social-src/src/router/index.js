import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/About.vue';
import Social from '../views/Social.vue';
import Portfolio from '../views/Portfolio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/social',
    name: 'Social',
    component: Social,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: 'social',
  routes,
});

export default router;
