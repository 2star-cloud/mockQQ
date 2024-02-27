import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '',
      password: '',
      age: '',
      friend: {

      }
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    login (state, value) {
      state.user.id = value.id
      state.user.password = value.password
    },
    enroll (state, value) {
      state.user.id = value.id
      state.user.password = value.password
      state.user.age = value.age
    },
    friend (state, value) {
      state.user.friend = value
    }
  },
  actions: {
  },
  modules: {
  }
})
