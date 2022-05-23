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
        <span>{{ authorName }} </span
        ><span class="caption"> / Born: {{ authorYear }}</span>
      </p>
    </v-card-text>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["book"],
  computed: {
    ...mapState("booksStore", ["books"]),
    ...mapState("genresStore", ["genres"]),
    ...mapState("authorsStore", ["authors"]),

    authorName() {
      try {
        const name = this.authors.find(
          ({ id }) => id === this.book.author
        ).fullName;

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
  methods: {},
};
</script>
<style>
</style>


