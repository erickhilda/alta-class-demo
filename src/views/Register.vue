<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        full_name: "",
        password: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/posts");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col justify-center items-center pt-8">
    <div class="w-96">
      <h2 class="text-center font-bold text-lg text-blue-500">Register</h2>
      <form
        @submit.prevent="submit"
        class="bg-white shadow-md rounded px-8 pt-6 pb-8"
      >
        <div class="mt-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            v-model="form.username"
            placeholder="Username"
          />
        </div>
        <div class="mt-4">
          <label
            for="full_name"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Full Name:</label
          >
          <input
            type="text"
            name="full_name"
            v-model="form.full_name"
            placeholder="Full Name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mt-4">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password:</label
          >
          <input
            type="password"
            name="password"
            v-model="form.password"
            placeholder="Password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="flex items-center justify-center mt-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    <p v-if="showError" id="error" class="text text-red-400">
      Username already exists
    </p>
  </div>
</template>
