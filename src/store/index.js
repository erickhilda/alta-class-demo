import { createStore } from "vuex";

const API_KEY = import.meta.env.VITE_APP_NEWS_API_KEY;

export const store = createStore({
  state() {
    return {
      count: 1,
      articles: [],
      loading: false,
      error: false,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setArticles(state, payload) {
      state.articles = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },

  actions: {
    incrementValue({ commit }) {
      commit("increment");
    },
    fetchArticles({ commit }, { query, category, countryId, page }) {
      const API_URL = `https://newsapi.org/v2/top-headlines?country=${countryId}&category=${category}&q=${query}&apiKey=${API_KEY}&pageSize=10&page=${page}`;
      commit("setLoading", true);
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          commit("setArticles", data.articles);
          commit("setLoading", false);
        })
        .catch((error) => {
          console.log("🚀 ~ fetchArticles ~ error", error);
        });
    },
  },
});
