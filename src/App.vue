<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopBar from './components/TopBar.vue'
import SearchTextfield from './components/SearchTextfield.vue'
import SampleBlock from './components/Sample.vue'
</script>

<template>
  <v-app>
  <TopBar/>
  <SearchTextfield/>
  <SampleBlock/>

</v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

</style>
