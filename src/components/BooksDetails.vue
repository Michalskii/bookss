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
          :name="this.book.author"
          :slug="this.authorSlug"
          :bookDetail="this.bookDetail"
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
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      DetailsWrapper: false,
      bookDetail: true,
    };
  },
  components: { DetailsWrapper, AuthorsDetails },
  computed: {
    ...mapState("booksStore", ["books"]),
    ...mapState("genresStore", ["genres"]),
    ...mapState("authorsStore", ["authors"]),

    authorSlug() {
      const found = this.authors.find(
        ({ name }) => name === this.book.author
      ).slug;
      return found;
    },
    genreName() {
      if (!this.book.genre) {
        return "Unknown";
      } else return this.book.genre;
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


