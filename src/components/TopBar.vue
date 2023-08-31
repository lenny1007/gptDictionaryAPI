<script setup>
const appTitle =  "GPT Dictionary API"
const menuItems = [
  { title: 'Paypal', path: '/home', icon: 'mdi-home' },
  { title: 'Github', path: '/signup', icon: 'mdi-face-man' },
  { title: 'Email', path: '/signin', icon: 'mdi-email' }
]
</script>

<template>

    <v-toolbar class="d-block"> 
    <v-container class="d-flex fill-height pa-0">
      <v-toolbar-title class="pa-2">
        {{ appTitle }}        
      </v-toolbar-title>
      <v-spacer class="d-none d-sm-flex"></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex fill-height">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :prepend-icon="item.icon" 
          stacked>
          {{ item.title }} 
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="d-flex d-sm-none fill-height" >
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          >
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-container>  
    </v-toolbar>
    
</template>
