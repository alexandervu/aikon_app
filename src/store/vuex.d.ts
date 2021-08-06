// This definition file is required when we use Option API.
// The Composition API just need the State Interface we defined
// directly in the store file.
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number;
    version: string;
    timestamp: string;
    githash: string;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
