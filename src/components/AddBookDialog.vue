<template>
  <div>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Title" required v-model="book.title" />
          </v-col>

          <v-col cols="12">
            <v-text-field label="Book Id" required v-model="book.id" />
          </v-col>

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
      <v-btn
        color="blue darken-1"
        text
        @click="
          addNewBook();
          clearInput();
        "
        >Save</v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,

      book: {},
      authors: [],
      genres: [],
    };
  },
  //   components: {
  //     AddBookDialog: AddBookDialog,
  //   },
  methods: {
    addNewBook() {
      let book = this.book;

      this.$emit("newBook", book);
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
};
</script>

<style></style>
