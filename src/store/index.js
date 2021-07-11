import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '../utils/storage'

Vue.use(Vuex)

const USER_KEY = 'toutiao-user'

export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY)
  },
  mutations: {
    setUser (state, user) {
      state.user = user
      // 持久化
      // localStorage.setItem(USER_KEY, JSON.stringify(state.user))
      setItem(USER_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
