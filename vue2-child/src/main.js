import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './router';
import store from './store';
import './public-path';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container, action, commonData } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2-child/' : '/',
    mode: 'history',
    routes
  });

  instance = new Vue({
    router,
    store,
    render: (h) =>
      h(App, {
        props: {
          action,
          commonData
        }
      })
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  //
}
export async function mount(props) {
  props.onGlobalStateChange &&
    (await props.onGlobalStateChange(async (value) => {
      props = {
        ...props,
        commonData: value
      };
      render(props);
    }, true));
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
