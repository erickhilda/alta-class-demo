<script>
export default {
  computed: {
    article() {
      let currentArticle = {};
      if (this.$store.state.articles.length === 0) {
        currentArticle = JSON.parse(localStorage.getItem("currentArticle"));
        console.log("🚀 ~ article ~ currentArticle", typeof currentArticle);
      } else {
        currentArticle = this.$store.state.articles.find(
          (article) => article.title === this.$route.params.id
        );
        localStorage.setItem("currentArticle", JSON.stringify(currentArticle));
      }
      return currentArticle;
    },
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "home",
      });
    },
  },
  mounted() {
    console.log(this.$route.params.id);
  },
};
</script>

<template>
  <div class="about">
    <div v-if="Object.keys(article).length !== 0">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <img :src="article.urlToImage" />
      <button
        @click="goBack"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
      >
        Back
      </button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
