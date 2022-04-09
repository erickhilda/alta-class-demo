<script>
export default {
  props: {
    title: {
      type: String || null,
      required: true,
    },
    description: {
      type: String || null,
      required: true,
    },
    image: {
      type: String || null,
      required: true,
    },
  },
  methods: {
    navigateToNewsPage() {
      this.$router.push({
        name: "news-detail",
        params: {
          id: this.title,
        },
      });
    },
  },
};
</script>

<template>
  <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm">
    <a href="#">
      <img class="rounded-t-lg" :src="image" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="text-gray-900 font-bold text-lg tracking-tight mb-2">
          {{ title }}
        </h5>
      </a>
      <p class="font-normal text-gray-700 mb-3 text-md">
        {{ description }}
      </p>
      <button
        @click="navigateToNewsPage"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
      >
        Read more
      </button>
    </div>
  </div>
</template>
