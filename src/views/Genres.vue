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

    <div class="btnsearch">
      <v-btn
        color="primary addNew"
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
        class="searchBar"
        single-line
        outlined
        hide-details
      />
    </div>
    <v-data-table
      :headers="headers"
      :items="genres"
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

<style  >
.my-data-table.v-data-table {
  /* margin-left: 3rem;
  margin-right: 3rem; */
  margin-top: 1rem;
  border-radius: 30px;

  background: rgba(248, 248, 248, 0.3);
  /* background: #eceff1; */
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td {
  font-size: 0.875rem;
  height: 48px;
}

.addNew.v-btn {
  /* margin-left: 2rem; */
}
.searchBar.v-text-field {
  /* margin-left: 3rem; */
  max-width: 200px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.btnsearch {
  display: flex;
  margin: 2%;
  justify-content: space-between;
  align-items: baseline;
}
</style>