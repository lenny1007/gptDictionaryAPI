<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TopBar from './TopBar.vue'
import SearchTextfield from './SearchTextfield.vue'
import SampleBlock from './Sample.vue'
import Footer from './Footer.vue'

</script>

<template>
  <TopBar/>
  <SearchTextfield/>
  <SampleBlock/>
  <br/><br/>
  <Footer/>
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
