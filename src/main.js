import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import storeModule from "./store";

const store = createStore(storeModule);

const app = createApp(App);

app.use(store);
app.mount("#app");
