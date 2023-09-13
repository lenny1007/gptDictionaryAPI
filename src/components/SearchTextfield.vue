<script setup>
import { ref } from 'vue'

function redirect_api(){
  window.location.href = "https://en.dictionary-api.com/v1/" +  word_text.value;
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
</template>
