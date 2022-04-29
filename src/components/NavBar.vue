<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({ User: "StateUser" }),
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("LogOut");
      this.$router.push("/login");
    },
  },
};
</script>

<template>
  <div class="nav">
    <div>
      <span v-if="isLoggedIn">
        <router-link to="/posts">Posts</router-link> |
        <a @click="logout">Logout</a>
      </span>
      <span v-else>
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link>
      </span>
    </div>
    <div>
      <span v-if="User"> Hi {{ User }} </span>
    </div>
  </div>
</template>

<style scoped>
.nav {
  @apply px-8 py-4 shadow flex flex-row justify-between;
}
.nav a {
  @apply font-bold text-slate-700 divide-x;
}
a:hover {
  @apply text-blue-500;
}
.nav a.router-link-exact-active {
  @apply text-blue-500;
}
</style>
