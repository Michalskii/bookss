<template>
  <div>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title" required v-model="book.title" />
          </v-col>

          <!-- <v-col cols="12">
            <v-text-field label="Book Id" required v-model="book.id" />
          </v-col> -->

          <v-col cols="12">
            <v-text-field
              label="Year released"
              v-model="book.released"
              required
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              :items="authors"
              label="Author"
              item-text="fullName"
              item-value="id"
              required
              v-model="book.author"
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              :items="genres"
              item-text="name"
              item-value="id"
              label="Genre"
              required
              v-model="book.genreId"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog()">Close</v-btn>
      <v-btn color="blue darken-1" text @click="addNewBook()">Save</v-btn>
    </v-card-actions>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      dialog: false,
      book: {},
    };
  },

  methods: {
    ...mapActions(["addBook"]),

    addNewBook() {
      this.book.id = this.getIds + 1;

      let book = this.book;

      this.addBook(book);
      this.clearInput();
      this.closeDialog();
    },
    clearInput() {
      this.book = "";
    },
    closeDialog() {
      this.$emit("close");
    },
  },

  computed: {
    genres() {
      return this.$store.state.genresStore.genres;
    },
    authors() {
      return this.$store.state.authorsStore.authors;
    },

    getIds() {
      const ids = this.$store.state.booksStore.books.map((book) => {
        return book.id;
      });

      const lastId = Math.max(0, ...ids);
      console.log(lastId);
      return lastId;
    },
  },
};
</script>

<style></style>
