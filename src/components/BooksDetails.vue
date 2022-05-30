<template>
  <div>
    <v-card-subtitle class="font-italic"
      >Title - {{ book.title }}</v-card-subtitle
    >
    <v-card-text>
      <p>Genre- {{ genreName }}</p>
      <p>
        Author -
        <span @click="showDetails()">{{ book.author }} </span>
      </p>

      <details-wrapper
        v-if="DetailsWrapper"
        :active="DetailsWrapper"
        title="Author details"
        @close="closeDetailsWrapper"
      >
        <authors-details
          :author="this.book.author"
          :name="this.authorName"
          :slug="this.authorSlug"
          :tescik="this.tete"
        />
      </details-wrapper>
    </v-card-text>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DetailsWrapper from "../components/DetailsWrapper.vue";
import AuthorsDetails from "../components/AuthorDetails.vue";

export default {
  props: ["book"],
  data() {
    return {
      DetailsWrapper: false,
      tete: true,
    };
  },
  components: { DetailsWrapper, AuthorsDetails },
  computed: {
    ...mapState("booksStore", ["books"]),
    ...mapState("genresStore", ["genres"]),
    ...mapState("authorsStore", ["authors"]),

    authorName() {
      try {
        const name = this.authors.find(
          ({ slug }) => slug === this.book.author
        ).name;

        return name;
      } catch {
        return "Who knows?";
      }
    },

    authorSlug() {
      const found = this.authors.find(
        ({ name }) => name === this.book.author
      ).slug;
      return found;
    },

    genreName() {
      try {
        const name = this.genres.find(
          ({ id }) => id === this.book.genreId
        ).name;

        return name;
      } catch {
        return "Unknown";
      }
    },
  },
  methods: {
    showDetails(item) {
      this.DetailsWrapper = true;
      this.item = item;
    },
    closeDetailsWrapper() {
      this.DetailsWrapper = false;
    },
  },
};
</script>
<style>
</style>


