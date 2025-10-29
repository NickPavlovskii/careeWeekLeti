import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

// ✅ Добавляем иконки
import '@mdi/font/css/materialdesignicons.css'

// Яндекс карты
import YmapPlugin from 'vue-yandex-maps'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // 👈 обязательно
  },
})

const settings = {
  apiKey: '569e5e73-b3c1-4297-9c04-c53376f40ffb',
  suggestApiKey: '569e5e73-b3c1-4297-9c04-c53376f40ffb',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.use(YmapPlugin, settings)
app.mount('#app')
