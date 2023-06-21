import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import storeModule from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

const store = createStore(storeModule);

const app = createApp(App);

app.use(store, VueAxios, axios);
app.mount("#app");
