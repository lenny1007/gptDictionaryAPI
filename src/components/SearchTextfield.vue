<script setup>
import { ref } from 'vue'

function test_log(){
  console.log(word_text.value)
}
const word_text = ref("")
</script>

<template>
  <v-container class="d-block d-flex">
    <v-spacer class="d-none d-sm-flex w-25"></v-spacer>
    <v-text-field label="Try it here"
        append-icon="mdi-magnify"
        variant="underlined"
        class="w-50 align-center"
        @click:append="test_log"
        @keyup.enter="test_log"
        v-model="word_text"
        >
    </v-text-field>
    <v-spacer class="d-none d-sm-flex w-25"></v-spacer>
  </v-container> 
</template>
