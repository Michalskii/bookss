<template>
  <div>
    <v-card-subtitle class="font-italic"
      >Title - {{ book.title }}</v-card-subtitle
    >
    <v-card-text
      ><p>Released: {{ book.released }}</p>
      <p>Genre- {{ genreName }}</p>
      <p>
        Author -
        <span @click="showDetails()">{{ authorName }} </span
        ><span class="caption"> / Born: {{ authorYear }}</span>
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
          :tescik="this.tete"
          :authorYear="this.authorYear"
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
    authorYear() {
      try {
        const name = this.authors.find(
          ({ id }) => id === this.book.author
        ).yearBorn;

        return name;
      } catch {
        return "Long time ago";
      }
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
      console.log("Item", this.book.author);
      this.DetailsWrapper = true;
      this.item = item;
      console.log(this.authorName, this.authorYear);
    },
    closeDetailsWrapper() {
      this.DetailsWrapper = false;
    },
  },
};
</script>
<style>
</style>


