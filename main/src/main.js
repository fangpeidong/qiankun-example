import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.css';
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

registerMicroApps([
  {
    name: 'Vue2Child',
    entry: '//localhost:8091',
    container: '#vue2-app',
    activeRule: '/vue2-child',
    props: {
      mainMsg: '我是主应用'
    }
  }
  // {
  //   name: 'Vue3Child',
  //   entry: '//localhost:8092',
  //   container: '#vue3-app',
  //   activeRule: '/vue3-child',
  //   props: {
  //     mainMsg: '我是主应用'
  //   }
  // }
]);

start();
