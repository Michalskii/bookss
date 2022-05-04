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
      :items-per-page="5"
      class="elevation-2"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import AddBookDialog from "../components/AddBookDialog.vue";
import DialogWrapper from "../components/DialogWrapper.vue";
import { mapActions } from "vuex";

export default {
  name: "Books",
  components: {
    AddBookDialog,
    DialogWrapper,
  },
  data() {
    return {
      search: "",
      // BookList: [],
      dialog: false,

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
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
    ...mapActions("booksStore", ["deleteBook"]),

    deleteItem(item) {
      this.deleteBook(item.id);
    },
  },

  computed: {
    books() {
      return this.$store.state.booksStore.books;
    },
  },
};
</script>
