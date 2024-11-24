import eventBus from '.';
import store from '../store';

function useEventBus() {
  eventBus.on('changeCommonState', (e) => {
    store.commit('CHANGE_COMMON_STATE', e);
  });

  return {
    eventBus
  };
}

export default useEventBus;
