import { createStore } from 'vuex'
import * as packdef from '../../package.json'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0,
      timestamp: packdef?.build?.timestamp || 'n/a',
      githash: packdef?.build?.githash || 'n/a',
      version: packdef?.version || 'n/a'
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
    },
    githash: state => {
      return state.githash
    },
    timestamp: state => {
      return state.timestamp
    }
  }
})

export { store }
