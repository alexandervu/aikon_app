import { createApp } from 'vue'
import Ambassador from './Ambassador.vue'
import { router } from './router'

createApp(Ambassador)
  .use(router)
  .mount('#ambassador')
