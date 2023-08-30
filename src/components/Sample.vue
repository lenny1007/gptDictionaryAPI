<script setup>

</script>

<template>
<v-container class="d-block bg-grey-lighten-4 rounded-sm">
  <h2 class="mb-2"> Get word definitions </h2>
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
  
</v-container>

</template>

<style>
.wordblock {
  word-break: normal;
  white-space: pre-wrap;
}
</style>