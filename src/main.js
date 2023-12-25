import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseWrapper from './components/ui/BaseWrapper.vue'
import BaseInput from './components/ui/BaseInput.vue'
import BaseCheckBox from './components/ui/BaseCheckBox.vue'
import BaseSpacer from './components/ui/BaseSpacer.vue'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  legacy: false,
  fallbackLocale: 'en'
})

const app = createApp(App)
app.use(i18n)
app
  .use(pinia)
  .component('BaseCard', BaseCard)
  .component('BaseButton', BaseButton)
  .component('BaseWrapper', BaseWrapper)
  .component('BaseInput', BaseInput)
  .component('BaseCheckBox', BaseCheckBox)
  .component('BaseSpacer', BaseSpacer)

app.mount('#app')
