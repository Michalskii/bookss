<template>
  <div>
    <book-list
      :loading="loading"
      :active="bookListDialog"
      @close="bookListDialog = false"
      :books="fetchedByGenres"
    ></book-list>
    <edit-item-wrapper
      @close="closeDialog"
      v-if="editDialog"
      :active="editDialog"
      :title="dialogTitle"
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
        dialogTitle = 'Add genre';
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
            dialogTitle = 'Edit genre';
          "
          >mdi-pencil
        </v-icon>
        <v-icon small @click.stop="showBooks(item)"
          >mdi-view-list-outline</v-icon
        >
      </template>
    </v-data-table>
  </div>
</template> 

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import EditGenre from "../components/EditGenre.vue";
import EditItemWrapper from "../components/EditItemWrapper.vue";
import DetailsWrapper from "../components/DetailsWrapper.vue";
import GenreDetails from "../components/GenreDetails.vue";
import BookList from "../components/BookList.vue";

export default {
  name: "Genres",
  data() {
    return {
      loading: false,
      dialog: false,
      search: "",
      editDialog: false,
      DetailsWrapper: false,
      fetchedGenres: [],
      dialogTitle: "",
      bookListDialog: false,

      headers: [
        {
          text: "Genre",
          align: "start",
          value: "name",
        },

        { text: "Genre ID", value: "slug" },
        { text: "Actions", value: "actions" },
      ],
    };
  },

  created() {
    this.fetchGenres();
  },

  components: {
    EditGenre,
    EditItemWrapper,
    DetailsWrapper,
    GenreDetails,
    BookList,
  },
  methods: {
    ...mapActions("genresStore", ["deleteGenre"]),
    ...mapActions("booksStore", ["updateList"]),
    ...mapActions("genresStore", [
      "pushFetched",
      "fetchGenres",
      "fetchBookList",
    ]),

    closeDialog() {
      this.editDialog = false;
    },

    async showBooks(item) {
      try {
        this.loading = true;
        await this.fetchBookList(item);
        this.bookListDialog = true;
      } finally {
        this.loading = false;
      }
    },

    showDetails(item) {
      this.DetailsWrapper = true;
      this.item = item;
      console.log(this.item);
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
      this.editDialog = true;
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
    ...mapState("genresStore", ["fetchedByGenres"]),
  },
};
</script>
