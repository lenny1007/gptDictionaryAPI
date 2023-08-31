import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld  from './components/HelloWorld.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//import {  mdi } from "vuetify/lib/iconsets/mdi";
import { aliases,fa } from 'vuetify/iconsets/fa'

//import "@mdi/font/css/materialdesignicons.css";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaypal, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-free/css/all.css";



const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
      //mdi,
    },
  },

})

app.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
//library.add(fab) // Include needed solid icons
library.add(fas) // Include needed solid icons

library.add(faPaypal, faGithub)
app.use(vuetify)
app.mount('#app')