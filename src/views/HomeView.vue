<script>
import CardItem from "../components/CardItem.vue";
import SelectInput from "../components/SelectInput.vue";

export default {
  components: { CardItem, SelectInput },
  data() {
    return {
      category: "business",
      countryId: "id",
      isShowCategoryOption: false,
      isShowCountryOption: false,
      optionsCategory: [
        {
          value: "business",
          label: "Business",
        },
        {
          value: "entertainment",
          label: "Entertainment",
        },
        {
          value: "general",
          label: "General",
        },
        {
          value: "health",
          label: "Health",
        },
        {
          value: "science",
          label: "Science",
        },
        {
          value: "sports",
          label: "Sports",
        },
        {
          value: "technology",
          label: "Technology",
        },
      ],
      optionsCountry: [
        {
          value: "ae",
          label: "United Arab Emirates",
        },
        {
          value: "id",
          label: "Indonesia",
        },
        {
          value: "us",
          label: "United States",
        },
      ],
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    articles() {
      return this.$store.state.articles;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  methods: {
    fetchArticles({ query, category, countryId }) {
      this.$store.dispatch("fetchArticles", {
        query,
        category,
        countryId,
      });
    },
    navigateToNewsPage(article) {
      this.$router.push({
        name: "news-detail",
        params: {
          id: article.title,
        },
      });
    },
    toggleSelectCategory() {
      this.isShowCategoryOption = !this.isShowCategoryOption;
    },
    toggleSelectCountry() {
      this.isShowCountryOption = !this.isShowCountryOption;
    },
  },
  mounted() {
    this.fetchArticles({
      query: "",
      category: this.category || "technology",
      countryId: this.countryId || "id",
    });
  },
};
</script>

<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <select-input
        :options="optionsCategory"
        :isShow="isShowCategoryOption"
        :value="category"
        @toggle-select="toggleSelectCategory"
        @select-option="
          (value) => {
            category = value.value;
            fetchArticles({
              query: '',
              category,
              countryId: countryId,
            });
            isShowCategoryOption = false;
          }
        "
      />
      <select-input
        :options="optionsCountry"
        :isShow="isShowCountryOption"
        :value="countryId"
        @toggle-select="toggleSelectCountry"
        @select-option="
          (value) => {
            countryId = value.value;
            fetchArticles({
              query: '',
              category: category,
              countryId,
            });
            isShowCountryOption = false;
          }
        "
      />
    </div>
    <div class="grid grid-cols-4 gap-2 mt-4">
      <card-item
        v-for="(article, index) in articles"
        :key="index"
        :title="article.title"
        :image="article.urlToImage"
        :description="article.description"
      />
    </div>
  </div>
</template>
