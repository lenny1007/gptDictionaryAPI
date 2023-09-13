<script setup>
const appTitle =  "GPT Dictionary API"
</script>

<template>

    <v-toolbar class="d-block"> 
    <v-container class="d-flex fill-height pa-0">
      <v-toolbar-title class="pa-2">
        {{ appTitle }}        
      </v-toolbar-title>
      
      
      <v-spacer class="d-none d-sm-flex"></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex fill-height">
        <v-btn href="https://paypal.me/lennychen0929?country.x=TW&locale.x=zh_TW" stacked><v-icon class="ma-1 fab fa-paypal"></v-icon> Donate </v-btn>
        <v-btn href="https://www.buymeacoffee.com/lenny0929/extras" stacked><v-icon class="ma-1 fas fa-circle-dollar-to-slot"></v-icon> Download  </v-btn>
        <v-btn href="https://github.com/lenny1007/gptDictionaryAPI" stacked><v-icon class="ma-1 fab fa-github"></v-icon> Github  </v-btn>
        <v-btn href="mailto:lenny0929@gmail.com" stacked><v-icon class="ma-1 fas fa-envelope"></v-icon> Email  </v-btn>
      
      </v-toolbar-items>
      <v-toolbar-items class="d-flex d-sm-none fill-height" >
        <v-btn href="https://paypal.me/lennychen0929?country.x=TW&locale.x=zh_TW"><v-icon size="xx-large" class="ma-1 fab fa-paypal"></v-icon></v-btn>
        <v-btn href="https://www.buymeacoffee.com/lenny0929/extras"><v-icon size="xx-large" class="ma-1 fas fa-circle-dollar-to-slot"></v-icon></v-btn>
        <v-btn href="https://github.com/lenny1007/gptDictionaryAPI"><v-icon size="xx-large" class="ma-1 fab fa-github"></v-icon></v-btn>
        <v-btn href="mailto:lenny0929@gmail.com"><v-icon size="xx-large" class="ma-1 fas fa-envelope"></v-icon></v-btn>
      </v-toolbar-items>
    </v-container>  
    </v-toolbar>
    
</template>
