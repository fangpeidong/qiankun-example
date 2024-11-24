import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalEventBus: null,
    globalState: {}
  },
  getters: {},
  mutations: {
    SET_GLOBAL_EVENT_BUS(state, payload) {
      state.globalEventBus = payload;
    },
    SET_GLOBAL_STATE(state, payload) {
      state.globalState = payload;
      console.log('00000', state.globalState);
    }
  },
  actions: {},
  modules: {}
});
