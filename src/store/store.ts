import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import * as packdef from '../../package.json'
// define your typings for the store state
export interface State {
  count: number;
  version: string;
  timestamp: string;
  githash: string;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

// Create a new store instance.
const store = createStore<State>({
  state () {
    return {
      count: 0,
      timestamp: packdef.build.timestamp || 'n/a',
      githash: packdef.build.githash || 'n/a',
      version: packdef.version || 'n/a'
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  getters: {
    version: (state) => {
      return state.version
    },
    githash: (state) => {
      return state.githash
    },
    timestamp: (state) => {
      return state.timestamp
    }
  }
})

export { store }
