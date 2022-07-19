<template>
  <div>
    <edit-item-wrapper
      @close="closeDialog"
      v-if="editDialog"
      :active="editDialog"
      :title="dialogTitle"
    >
      <edit-book
        @close="closeDialog"
        :editedItem="this.editedItem"
        :editedIndex="this.editedIndex"
        :create="this.create"
      />
    </edit-item-wrapper>

    <details-wrapper
      v-if="DetailsWrapper"
      :active="DetailsWrapper"
      title="Book details"
      @close="closeDetailsWrapper"
    >
      <books-details :book="item"> </books-details>
    </details-wrapper>
    <div class="btnsearch">
      <v-btn
        color="primary"
        dark
        @click="
          createBook();
          editItem();
          dialogTitle = 'Add book';
        "
      >
        Add new book
      </v-btn>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        outlined
        class="searchBar"
        hide-details
      />
    </div>
    <v-data-table
      :headers="headers"
      :items="books"
      :search="search"
      @click:row="showDetails"
      :items-per-page="5"
      :custom-filter="filter"
      class="elevation-2 my-data-table"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click.stop="deleteItem(item)"> mdi-delete </v-icon>
        <v-icon
          small
          @click.stop="
            editItem(item);
            edit();
            dialogTitle = 'Edit book';
          "
        >
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import EditBook from "../components/EditBook.vue";
import EditItemWrapper from "../components/EditItemWrapper.vue";

import DetailsWrapper from "../components/DetailsWrapper.vue";
import BooksDetails from "../components/BooksDetails.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Books",
  components: {
    // AddBookDialog,
    // DialogWrapper,
    EditBook,
    EditItemWrapper,
    DetailsWrapper,
    BooksDetails,
  },
  data() {
    return {
      search: "",
      dialog: false,
      editBookDialog: false,
      editDialog: false,
      create: false,
      dialogTitle: "",
      DetailsWrapper: false,
      fetchedBooks: [],
      editedItem: {
        title: "",
        released: 0,
        author: "",
        genreId: 0,
      },

      headers: [
        {
          text: "Title",
          align: "start",
          value: "title",
        },
        { text: "ID", value: "slug" },

        { text: "Author", value: "author" },
        { text: "Genre", value: "genre" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    ...mapActions("booksStore", [
      "pushFetched",
      "fetchBooks",
      "deleteBook",
      "updateList",
    ]),

    closeDialog() {
      this.dialog = false;
      this.editDialog = false;
    },

    closeDetailsWrapper() {
      this.DetailsWrapper = false;
    },

    openDialog() {
      this.dialog = true;
    },
    closeEditBookDialog() {
      this.editBookDialog = false;
    },

    deleteItem(item) {
      this.deleteBook(item.slug);
    },

    filter(value, search, item) {
      let filtered = RegExp(search, "i").test(item.title);
      return filtered;
    },
    edit() {
      this.create = false;
    },
    createBook() {
      this.create = true;
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editDialog = true;
    },
    showDetails(item) {
      this.DetailsWrapper = true;
      this.item = item;
    },
  },

  computed: {
    ...mapState("booksStore", ["books"]),
  },
  props: {},
};
</script>
