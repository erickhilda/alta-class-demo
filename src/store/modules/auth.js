import axios from "axios";

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {
  async Register({ dispatch }, form) {
    await axios.post("api/auth/local/register", form);
    let UserForm = new FormData();
    UserForm.append("identifier", form.username);
    UserForm.append("password", form.password);
    await dispatch("LogIn", UserForm);
  },

  async LogIn({ commit }, user) {
    const result = await axios.post("api/auth/local", user);
    const userRes = await result.data;
    axios.defaults.headers.common["Authorization"] = `Bearer ${userRes.jwt}`;
    await commit("setUser", userRes.user.username);
    localStorage.setItem("user", userRes.user.username);
  },

  async CreatePost({ dispatch }, post) {
    await axios.post("api/tasks", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("api/tasks");
    commit("setPosts", response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    localStorage.removeItem("user");
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
