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
        :create="this.create"
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
    <v-btn
      color="primary"
      dark
      @click="
        createItem();
        editItem();
      "
    >
      Add new genre
    </v-btn>

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
        <v-icon small @click.stop="deleteItem(item)"> mdi-delete </v-icon>
        <v-icon
          small
          @click.stop="
            editItem(item);
            edit();
          "
        >
          mdi-pencil
        </v-icon>
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
      fetchedGenres: [],

      headers: [
        {
          text: "Genre",
          align: "start",
          value: "name",
        },

        { text: "Genre ID", value: "slug" },
        { text: "Delete item", value: "actions" },
      ],
    };
  },

  created() {
    this.fetchGenres();
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
    ...mapActions("genresStore", ["pushFetched"]),

    closeDialog() {
      this.dialog = false;
      this.jajko = false;
    },
    fetchGenres() {
      fetch("https://wolnelektury.pl/api/genres/")
        .then((response) => response.json())
        .then((data) =>
          (this.fetchedGenres = data)(this.pushFetched(this.fetchedGenres))
        );
    },
    openDialog() {
      this.dialog = true;
    },
    showDetails(item) {
      console.log("Item", item);
      this.DetailsWrapper = true;
      this.item = item;
    },
    edit() {
      this.create = false;
    },
    createItem() {
      this.create = true;
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
      const newBooks = this.books.map((obj) => {
        if (obj.genre === item.name) {
          return { ...obj, genre: null };
        }

        return obj;
      });

      this.updateList(newBooks);
      this.deleteGenre(item.slug);
    },
  },
  computed: {
    ...mapState("genresStore", ["genres"]),
    ...mapState("booksStore", ["books"]),
  },
};
</script>
