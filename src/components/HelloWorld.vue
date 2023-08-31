<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';


defineProps({
  msg: String,
})

const asyn_text = ref("")

axios.defaults.baseURL = 'https://dictionary-api-4rbqr7xcwq-de.a.run.app';  // the FastAPI backend

onMounted(async () => {
  console.log("onMounted started")
  getWord()
})

function getWord() {
  
  console.log("Get Word started")
  axios.get('/v1/hello')
        .then((res) => {
          console.log(res)
          asyn_text.value = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
}

</script>

<template>
  <router-view>
  <h1>{{ msg }}</h1>
  <p>{{ asyn_text }}</p>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <v-icon icon="mdi-home" />
  <v-icon color="warning" icon="mdi-alert-circle"></v-icon>
  <v-btn append-icon="$vuetify" variant="outlined">
  Button
  </v-btn>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  </router-view>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
