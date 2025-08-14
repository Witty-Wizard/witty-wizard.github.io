import { createApp } from 'vue'
import '@/global.css'
import ParticleField from '@/components/ParticleField.vue'

const App = createApp({});

App.component('particle-field', ParticleField)

App.mount('#app')
