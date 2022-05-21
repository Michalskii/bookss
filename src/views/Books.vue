<template>
  <div>
    <dialog-wrapper
      v-if="dialog === true"
      :active="dialog"
      @close="closeDialog"
      title="Add new book"
    >
      <add-book-dialog @close="closeDialog" />
    </dialog-wrapper>

    <v-btn color="primary" dark @click="openDialog"> Add new book </v-btn>

    <edit-item-wrapper
      @close="closeDialog"
      v-if="jajko"
      :active="jajko"
      title="Edit book"
    >
      <edit-book
        @close="closeDialog"
        v-bind:editedItem="this.editedItem"
        :editedIndex="this.editedIndex"
      />
    </edit-item-wrapper>

    <details-wrapper
      v-if="DetailsWrapper === true"
      :active="DetailsWrapper"
      title="Book details"
      @close="closeDetailsWrapper"
    >
      <books-details v-bind:book="item"> </books-details>
    </details-wrapper>

    <!-- <v-dialog v-model="editBookDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">dsad</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.title"
                  label="Title"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.released"
                  label="Released"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.author"
                  item-text="fullName"
                  label="Author Id"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="editedItem.genreId"
                  label="Genre Id"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeEditBookDialog">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="saveEditedItem">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    />

    <v-data-table
      :headers="headers"
      :items="books"
      :search="search"
      @click:row="showDetails"
      :items-per-page="5"
      :custom-filter="filter"
      class="elevation-2"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click.stop="deleteItem(item)"> mdi-delete </v-icon>
        <v-icon small @click.stop="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import AddBookDialog from "../components/AddBookDialog.vue";
import DialogWrapper from "../components/DialogWrapper.vue";
import EditBook from "../components/EditBook.vue";
import EditItemWrapper from "../components/EditItemWrapper.vue";
import { mapActions } from "vuex";
import DetailsWrapper from "../components/DetailsWrapper.vue";
import BooksDetails from "../components/BooksDetails.vue";

export default {
  name: "Books",
  components: {
    AddBookDialog,
    DialogWrapper,
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
      jajko: false,
      DetailsWrapper: false,
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
        { text: "ID", value: "id" },
        { text: "Released", value: "released" },
        { text: "Author ID", value: "author" },
        { text: "Genre ID", value: "genreId" },
        { text: "Delete", value: "actions" },
      ],
    };
  },
  methods: {
    ...mapActions("booksStore", ["deleteBook"]),
    ...mapActions("booksStore", ["updateList"]),

    closeDialog() {
      this.dialog = false;
      this.jajko = false;
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
      this.deleteBook(item.id);
    },
    openDetails(item) {
      console.log("Item", item);
    },
    filter(value, search, item) {
      let filtered = RegExp(search, "i").test(item.title);
      return filtered;
    },

    editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);

      this.jajko = true;
    },
    showDetails(item) {
      console.log("Item", item);
      this.DetailsWrapper = true;
      this.item = item;
    },
  },

  computed: {
    books() {
      return this.$store.state.booksStore.books;
    },
  },
  props: {},
};
</script>
