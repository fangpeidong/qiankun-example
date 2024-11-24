import { registerMicroApps, start } from 'qiankun';
import { action } from './action';

function useMicro() {
  registerMicroApps([
    {
      name: 'Vue2Child',
      entry: '//localhost:8091',
      container: '#vue2-app',
      activeRule: '/vue2-child',
      props: {
        mainMsg: '我是主应用',
        action
      }
    },
    {
      name: 'Vue3Child',
      entry: '//localhost:8092',
      container: '#vue3-app',
      activeRule: '/vue3-child',
      props: {
        mainMsg: '我是主应用',
        action
      }
    }
  ]);

  start();
}

export default useMicro;
