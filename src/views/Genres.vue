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
    <edit-item-wrapper
      @close="closeDialog"
      v-if="jajko"
      :active="jajko"
      title="Edit genre"
    >
      <edit-genre
        @close="closeDialog"
        :editedItem="this.editedItem"
        :editedIndex="this.editedIndex"
      />
    </edit-item-wrapper>

    <details-wrapper
      v-if="DetailsWrapper"
      :active="DetailsWrapper"
      title="Genre details"
      @close="closeDetailsWrapper"
    >
      <genre-details :genre="item" />
    </details-wrapper>
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
      @click:row="showDetails"
      :items-per-page="5"
      :custom-filter="filter"
      class="elevation-2"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        <v-icon small @click.stop="editItem(item)"> mdi-pencil </v-icon>
      </template>
    </v-data-table>
  </div>
</template> 

<script>
import AddGenreDialog from "../components/AddGenreDialog.vue";
import DialogWrapper from "../components/DialogWrapper.vue";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import EditGenre from "../components/EditGenre.vue";
import EditItemWrapper from "../components/EditItemWrapper.vue";
import DetailsWrapper from "../components/DetailsWrapper.vue";
import GenreDetails from "../components/GenreDetails.vue";

export default {
  name: "Genres",
  data() {
    return {
      dialog: false,
      search: "",
      jajko: false,
      DetailsWrapper: false,

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
    EditGenre,
    EditItemWrapper,
    DetailsWrapper,
    GenreDetails,
  },
  methods: {
    ...mapActions("genresStore", ["deleteGenre"]),
    ...mapActions("booksStore", ["updateList"]),
    closeDialog() {
      this.dialog = false;
      this.jajko = false;
    },
    openDialog() {
      this.dialog = true;
    },
    showDetails(item) {
      console.log("Item", item);
      this.DetailsWrapper = true;
      this.item = item;
    },
    closeDetailsWrapper() {
      this.DetailsWrapper = false;
    },
    editItem(item) {
      this.editedIndex = this.genres.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(item);
      this.jajko = true;
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
