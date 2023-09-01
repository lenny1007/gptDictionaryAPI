<script setup>
import { ref } from 'vue'
import axios from 'axios';

const asyn_text = ref("")
//axios.defaults.baseURL = 'https://dictionary-api-4rbqr7xcwq-de.a.run.app';  // the FastAPI backend

function redirect_api(){
  window.location.href = "https://en.dictionary-api.com/v1/" +  word_text.value;
  /*
  axios.get('/v1/' + word_text.value )
        .then((res) => {
          console.log(res)
          asyn_text.value = res.data;

        })
        .catch((error) => {
            router.push({ path: '/hello' })
          console.error(error);
        });
  */
}
const word_text = ref("")
</script>

<template>
  <v-container class="d-block d-flex">
    <v-spacer class="d-none d-sm-flex w-25"></v-spacer>
    <v-text-field label="Try it here"
        append-icon="fas fa-magnifying-glass"
        variant="underlined"
        class="w-50 align-center"
        @click:append="redirect_api"
        @keyup.enter="redirect_api"
        v-model="word_text"
        >
    </v-text-field>

    <v-spacer class="d-none d-sm-flex w-25"></v-spacer>
  </v-container> 
  <v-container>
    <p>{{ asyn_text }}</p>
  </v-container>
</template>
