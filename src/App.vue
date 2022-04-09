<script>
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: { SideBar, NavBar },
};
</script>

<template>
  <div class="flex h-screen">
    <side-bar />
    <div
      class="flex flex-col flex-1 min-h-screen overflow-x-hidden overflow-y-auto"
    >
      <nav-bar />
      <main class="px-6 py-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
