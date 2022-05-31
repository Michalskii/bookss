<template>
  <div>
    <book-list
      :active="bookListDialog"
      @close="bookListDialog = false"
      :books="fetchedByAuthors"
    ></book-list>
    <edit-item-wrapper
      @close="closeDialog"
      v-if="editDialog"
      :active="editDialog"
      :title="dialogTitle"
    >
      <edit-author
        @close="closeDialog"
        :editedItem="this.editedItem"
        :editedIndex="this.editedIndex"
        :create="this.create"
      />
    </edit-item-wrapper>

    <details-wrapper
      v-if="DetailsWrapper"
      :active="DetailsWrapper"
      title="Author details"
      @close="closeDetailsWrapper"
    >
      <authors-details :author="item" />
    </details-wrapper>

    <v-btn
      color="primary"
      dark
      @click="
        createItem();
        editItem();
        dialogTitle = 'Add author';
      "
    >
      Add new author
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
      :items="authors"
      :search="search"
      @click:row="showDetails"
      :items-per-page="5"
      class="elevation-2"
      :custom-filter="filter"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click.stop="deleteItem(item)"> mdi-delete </v-icon>
        <v-icon
          small
          @click.stop="
            editItem(item);
            edit();
            dialogTitle = 'Edit author';
          "
        >
          mdi-pencil
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
import EditAuthor from "../components/EditAuthor.vue";
import EditItemWrapper from "../components/EditItemWrapper.vue";
import DetailsWrapper from "../components/DetailsWrapper.vue";
import AuthorsDetails from "../components/AuthorDetails.vue";
import BookList from "../components/BookList.vue";

export default {
  components: {
    EditAuthor,
    EditItemWrapper,
    DetailsWrapper,
    AuthorsDetails,
    BookList,
  },

  data() {
    return {
      search: "",
      create: false,
      fetchedAuthors: [],
      editDialog: false,
      DetailsWrapper: false,
      bookListDialog: false,

      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        { text: "Author ID", value: "slug" },
        { text: "Actions", value: "actions" },
      ],
    };
  },

  mounted() {
    this.fetchAuthors();
  },
  computed: {
    ...mapState("authorsStore", ["authors", "fetchedByAuthors"]),
    ...mapState("booksStore", ["books"]),
  },
  methods: {
    ...mapActions("authorsStore", ["deleteAuthor"]),
    ...mapActions("booksStore", ["updateList"]),
    ...mapActions("authorsStore", [
      "pushFetched",
      "fetchAuthors",
      "fetchBookList",
    ]),

    closeDialog() {
      this.editDialog = false;
    },
    showBooks(item) {
      this.fetchBookList(item);
      this.bookListDialog = true;
    },

    edit() {
      this.create = false;
    },

    createItem() {
      this.create = true;
    },

    showDetails(item) {
      this.DetailsWrapper = true;
      this.item = item;
    },
    closeDetailsWrapper() {
      this.DetailsWrapper = false;
    },

    filter(value, search, item) {
      let filtered = RegExp(search, "i").test(item.name);
      return filtered;
    },
    editItem(item) {
      this.editedIndex = this.authors.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editDialog = true;
    },

    deleteItem(item) {
      const newBooks = this.books.map((obj) => {
        if (obj.author === item.slug) {
          return { ...obj, author: null };
        }

        return obj;
      });

      this.updateList(newBooks);

      this.deleteAuthor(item.slug);
    },
  },
};
</script>
