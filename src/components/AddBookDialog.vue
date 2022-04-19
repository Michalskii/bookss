<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Add book
        </v-btn></template
      >

      <v-card>
        <v-card-title>
          <span class="text-h5">Add new book</span>
        </v-card-title>
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
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn
            color="blue darken-1"
            text
            @click="
              dialog = false;
              addNewBook();
            "
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AddBookDialog from "../components/AddBookDialog.vue";

export default {
  data() {
    return {
      dialog: false,

      book: {},
      authors: [],
      genres: [],
    };
  },
  components: {
    AddBookDialog: AddBookDialog,
  },
  methods: {
    addNewBook() {
      let book = this.book;

      this.$emit("newBook", book);
    },
  },
};
</script>

<style></style>
