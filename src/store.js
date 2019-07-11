import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    count(state) {
      return state.count
    },
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.cnt * 1
    },
  },
  actions: {
    increment({ commit }, payload) {
      commit('increment', payload)
    },
  },
})
