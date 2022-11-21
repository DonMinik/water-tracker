/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes : {
    dark:
  {
    colors:{
      background: '#1A374D',
      primary: '#6998AB',
      secondary: '#406882',
      accent: '#B1D0E0',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }, 
  }
  }
  },
})
