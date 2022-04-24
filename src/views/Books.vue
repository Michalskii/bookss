<template>
  <div>
    <dialog-wrapper
      v-if="dialog === true"
      :active="dialog"
      @close="closeDialog"
      title="Add new book"
    >
      <add-book-dialog @close="closeDialog" @newBook="updateBook($event)" />
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
      :items="BookList"
      :search="search"
      :items-per-page="5"
      class="elevation-2"
    />
  </div>
</template>
<script>
import AddBookDialog from "../components/AddBookDialog.vue";
import DialogWrapper from "../components/DialogWrapper.vue";

export default {
  name: "Books",
  components: {
    AddBookDialog,
    DialogWrapper,
  },
  data() {
    return {
      search: "",
      BookList: [],
      dialog: false,
      book: {},
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
      ],
    };
  },
  methods: {
    updateBook(newBook) {
      this.BookList.push(newBook);

      const newBooks = JSON.stringify(this.BookList);
      localStorage.setItem("BookList", newBooks);
    },
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
  },
  mounted() {
    if (localStorage.BookList) {
      this.BookList = JSON.parse(localStorage.BookList);
    }
  },
};
</script>
