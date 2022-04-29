<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  created() {
    const user = localStorage.getItem("user");
    this.$store.commit("setUser", user);
  },
};
</script>

<template>
  <div class="flex min-h-screen flex-col overflow-hidden">
    <main class="py-6 w-full mx-auto max-w-3xl h-full">
      <nav-bar />
      <router-view />
    </main>
  </div>
</template>
