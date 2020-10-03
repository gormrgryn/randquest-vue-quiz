import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from 'mitt'

createApp(App).use(store).use(router).mount('#app')
const eventBus = mitt()
export default eventBus