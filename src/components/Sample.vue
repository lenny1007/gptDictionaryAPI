<script setup>

</script>

<template>
<v-container class="d-block bg-grey-lighten-4 rounded-sm">
  <h1 class="mb-2 text-h5"> Get word definitions </h1>
  <br/>
  <p><strong>Usage :</strong> The basic syntax of a URL request to the API is shown below:</p>
  <p class="text-cyan-accent-4 ma-2">
    https://api.dictionaryapi.dev/api/v2/entries/en/{word}
  </p>
  <br/>
  <p>
    As an example, to get definition of English word hello, you can send request to
  </p>
  <p class="text-cyan-accent-4 ma-2">
    https://api.dictionaryapi.dev/api/v2/entries/en/hello
  </p>
  <br/>
  <v-container class="d-block bg-grey-darken-3 rounded-sm">
     <pre class="wordblock">

  [
    {
      "word": "hello",
      "phonetic": "həˈləʊ",
      "phonetics": [
        {
          "text": "həˈləʊ",
          "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        },
        {
          "text": "hɛˈləʊ"
        }
      ],
      "origin": "early 19th century: variant of earlier hollo ; related to holla.",
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and helloed",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
  ]
  </pre>
    </v-container>
    <br/>
    <br/>
    <v-spacer/>
    <hr/>
    <br/>
  <h2 class="text-h5">Donate</h2>
  <p>Dictionary API is—and always will be—free. <br/>
    Our mission is to provide users with an API that they can use to build a game, learning application, or next-generation speech and text technology. <br/>
    Your donation directly helps the development of Dictionary API and keeps the server running.</p>
    <br/>
    <img src="https://camo.githubusercontent.com/361950b331ef676b7eec436a4dbe5a7ce47211a6623dcc889b1f5b7b611b27df/68747470733a2f2f7777772e70617970616c6f626a656374732e636f6d2f656e5f55532f692f62746e2f62746e5f646f6e61746543435f4c472e676966" alt="paypal" data-canonical-src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" style="max-width:100%;">
</v-container>

</template>

<style>
.wordblock {
  word-break: normal;
  white-space: pre-wrap;
}
</style>