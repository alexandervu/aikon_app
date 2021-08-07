<template>
  <div>{{ pageName }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const pageName = ref<String>('Not Found Page')

    return {
      pageName
    }
  }
})
</script>
