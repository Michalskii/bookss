<template>
  <div>
    <AddBookDialog @newBook="updateBook($event)" >
          

          
          <v-card-title slot="title">
          <span class="text-h5">Add new book</span>
        </v-card-title>
    </AddBookDialog>
    
    
    
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

export default {
  name: "Books",
  components: {
    AddBookDialog,
  },
  data() {
    return {
      search: "",
      BookList: [],
      
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
  },
  mounted() {
    if (localStorage.BookList) {
      this.BookList = JSON.parse(localStorage.BookList);
    }
  },
};
</script>
