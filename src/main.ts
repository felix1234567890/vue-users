import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(i18n)
app.component("v-select", vSelect);
app.mount('#app')
