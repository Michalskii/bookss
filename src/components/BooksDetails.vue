<template>
  <div>
    <v-card-subtitle class="display-1 font-italic"
      >{{ book.title }} -- Released: {{ book.released }}</v-card-subtitle
    >
    <v-card-text
      ><p class="">{{ book.author.fullName }}</p>
      <p>Fantasy {{ book.genreId }}</p></v-card-text
    >
  </div>
</template>

<script>
export default {
  props: ["book"],
  computed: {
    books() {
      return this.$store.state.booksStore.books;
    },

    authors() {
      return this.$store.state.authorsStore.authors;
    },

    genres() {
      return this.$store.state.genresStore.genres;
    },
  },
};
</script>
<style>
</style>


