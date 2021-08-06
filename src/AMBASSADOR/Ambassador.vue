<template>
  <router-link to="/">
    Menu
  </router-link>
  <router-link to="/users">
    Users list
  </router-link>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Ambassador'
})
</script>
