import { createApp } from 'vue'
import App from './App.vue'
import { axiosSetup } from './axios-setup'

axiosSetup()
createApp(App).mount('#app')
