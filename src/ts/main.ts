import { createApp } from 'vue';
import '@/style.css';
import Navbar from "@/components/Navbar.vue"

const app = createApp({})

app.component('my-component', Navbar)

app.mount('#app');
