import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    // redirect: '/vue2-child',
    children: [
      { path: 'vue2-child', name: 'Vue2Child' },
      { path: 'vue3-child' }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
