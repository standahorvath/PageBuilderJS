import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import "./assets/style.css";
import vClickOutside from "click-outside-vue3";
const pinia = createPinia()

const app = createApp(App)
app.use(vClickOutside)
app.use(pinia)
app.mount("#app");
