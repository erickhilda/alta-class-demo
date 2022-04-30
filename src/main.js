import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import axios from "axios";
import "./assets/base.css";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      store.dispatch("LogOut");
      return router.push("/login");
    }
  }
});

const app = createApp(App);

app.use(router).use(store);

app.mount("#app");
