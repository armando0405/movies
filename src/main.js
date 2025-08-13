import { createApp } from 'vue'
import App from './App.vue'
//manejo de rutas se importa esta libreria
import router from './router'
import './style.css'
import { createPinia } from 'pinia'
const pinia = createPinia()

//todas las importaciones como rutas o el uso de pinia se deben agregar aqui
createApp(App).use(router).use(pinia).mount('#app')
