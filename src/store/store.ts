import { createStore } from 'vuex'
import * as packdef from '../../package.json'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      build: '-',
      version: packdef.version || '-'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    version: state => {
      return state.version
    }
  }
})

export { store }
