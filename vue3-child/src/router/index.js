import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/index.vue')
  }
];

// const router = createRouter({
//   // history: createWebHistory(process.env.BASE_URL),
//   history: createWebHistory(
//     window.__POWERED_BY_QIANKUN__ ? '/vue3-child/' : '/'
//   ),
//   routes
// });

export default routes;
