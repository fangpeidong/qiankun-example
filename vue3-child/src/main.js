import { createApp } from 'vue';
import App from './App.vue';
import routes from './router';
import store from './store';
import './public-path';
import { createRouter, createWebHistory } from 'vue-router';
import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

let app;
function render(props = {}) {
  const { container, action, commonData } = props;
  app = createApp(App, {
    mainAction: action,
    mainCommonData: commonData
  });

  const router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? '/vue3-child/' : '/'
    ),
    routes
  });
  app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
  //
}

/**
 * mount ： 在应用每次进入时调用
 */
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

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  app?.unmount();
  app = null;
}
