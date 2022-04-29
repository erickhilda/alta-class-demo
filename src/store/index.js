import { createStore } from "vuex";
import auth from "./modules/auth";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const store = createStore({
  state() {
    return {};
  },
  mutations: {},

  actions: {},
  modules: {
    auth,
  },
});
