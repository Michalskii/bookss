<template>
  <div>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title" required v-model="book.title" />
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Year released"
              v-model="book.released"
              @keypress="validateNum"
              required
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              v-model="book.author"
              :items="authors"
              label="Author"
              item-text="fullName"
              item-value="id"
              color="blue"
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="genres"
              item-text="name"
              item-value="id"
              label="Genre"
              required
              v-model="book.genreId"
            >
            </v-autocomplete>
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
import { getIds } from "../components/getIds";
import Combobox from "../components/Combobox.vue";
import { NumbersOnly } from "../components/NumbersOnly";

export default {
  components: {
    Combobox,
  },
  data() {
    return {
      dialog: false,
      book: {},
      label: "Author",
    };
  },

  methods: {
    ...mapActions("booksStore", ["addBook"]),

    addNewBook() {
      this.book.id = getIds(this.books) + 1;
      let book = this.book;

      this.addBook(book);
      this.clearInput();
      this.closeDialog();
      // if (!book.author) {
      //   alert("dupa");
      //   event.preventDefault();
      // }
    },
    validateNum() {
      return NumbersOnly();
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
    books() {
      return this.$store.state.booksStore.books;
    },
  },
};
</script>

<style></style>
