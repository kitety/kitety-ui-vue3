import App from "./app.vue";
import V3Component from 'src'

import { createApp } from "vue";

const app = createApp(App);
app.use(V3Component)
app.mount("#app");
