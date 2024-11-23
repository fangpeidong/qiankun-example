import { createApp } from 'vue';
import App from './App.vue';
import routes from './router';
import store from './store';
import './public-path';
import { createRouter, createWebHistory } from 'vue-router';

// createApp(App).use(store).use(router).mount('#app');

let app;
function render(props = {}) {
  const { container } = props;
  app = createApp(App);

  const router = createRouter({
    history: createWebHistory(
      window.__POWERED_BY_QIANKUN__ ? '/vue3-child/' : '/'
    ),
    routes
  });
  app
    .use(store)
    .use(router)
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
  console.log('bootstrap');
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props) {
  console.log('mount', props);
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
  console.log('unmount');
  app?.unmount();
  app = null;
}
