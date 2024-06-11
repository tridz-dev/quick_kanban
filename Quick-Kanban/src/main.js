import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './utils/store'

window.frappe = frappe;

const app = createApp(App)
app.use(store);
app.mount('#kanbanapp')