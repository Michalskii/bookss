<template>
  <div>
    <dialog-wrapper
      v-if="dialog === true"
      :active="dialog"
      @close="closeDialog"
      title="Add new genre"
    >
      <add-genre-dialog @close="closeDialog" @newGenre="updateGenre($event)" />
    </dialog-wrapper>

    <v-btn color="primary" dark @click="openDialog"> Add new genre </v-btn>

    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
    />
    <v-data-table
      :headers="headers"
      :items="genres"
      :search="search"
      :items-per-page="5"
      :custom-filter="filter"
      class="elevation-2"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template> 

<script>
import AddGenreDialog from "../components/AddGenreDialog.vue";
import DialogWrapper from "../components/DialogWrapper.vue";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "Genres",
  data() {
    return {
      dialog: false,
      search: "",
      headers: [
        {
          text: "Genre",
          align: "start",
          value: "name",
        },

        { text: "Genre ID", value: "id" },
        { text: "Delete item", value: "actions" },
      ],
    };
  },

  components: {
    AddGenreDialog,
    DialogWrapper,
  },
  methods: {
    ...mapActions("genresStore", ["deleteGenre"]),
    ...mapActions("booksStore", ["updateList"]),
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
    filter(value, search, item) {
      let filtered = RegExp(search, "i").test(item.name);
      return filtered;
    },
    deleteItem(item) {
      // const books = this.$store.state.booksStore.books;

      const newBooks = this.books.map((obj) => {
        if (obj.genreId === item.id) {
          return { ...obj, genreId: null };
        }

        return obj;
      });

      this.updateList(newBooks);
      this.deleteGenre(item.id);
    },
  },
  computed: {
    // genres() {
    //   return this.$store.state.genresStore.genres;
    // },
    ...mapState("genresStore", ["genres"]),
    ...mapState("booksStore", ["books"]),
  },
};
</script>
