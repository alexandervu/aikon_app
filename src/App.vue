<template>
  <router-link to="/">
    Home
  </router-link>
  <router-link to="/profile">
    Profile
  </router-link>
  <a href="/ambassador/">AMBASSADOR</a>
  <router-view />
  <img
    alt="Vue logo"
    src="./assets/logo.png">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
