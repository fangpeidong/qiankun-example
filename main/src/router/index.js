import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('../views/Home.vue')
      },
      { path: 'vue2-child', name: 'Vue2Child' },
      { path: 'vue3-child', name: 'Vue3Child' },
      { path: 'react18-child', name: 'React18Child' }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
