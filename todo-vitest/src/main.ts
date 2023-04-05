import { createApp } from 'vue'
import './style.css'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)

const app = createApp(App)

app.use(pinia)
app.mount('#app')
