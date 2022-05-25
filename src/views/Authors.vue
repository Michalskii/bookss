<template>
  <div>
    <dialog-wrapper
      v-if="dialog"
      :active="dialog"
      @close="closeDialog"
      title="Add new author"
    >
      <add-author-dialog @close="closeDialog" />
    </dialog-wrapper>

    <edit-item-wrapper
      @close="closeDialog"
      v-if="jajko"
      :active="jajko"
      title="Edit author"
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
    <v-btn @click="ttt">Load Authors</v-btn>
    <v-btn
      color="primary"
      dark
      @click="
        createItem();
        editItem();
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
          "
        >
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import DialogWrapper from "@/components/DialogWrapper";
import AddAuthorDialog from "@/components/AddAuthorDialog";
import { mapActions } from "vuex";
import { mapState } from "vuex";
import EditAuthor from "../components/EditAuthor.vue";
import EditItemWrapper from "../components/EditItemWrapper.vue";
import DetailsWrapper from "../components/DetailsWrapper.vue";
import AuthorsDetails from "../components/AuthorDetails.vue";
export default {
  components: {
    DialogWrapper,
    AddAuthorDialog,
    EditAuthor,
    EditItemWrapper,
    DetailsWrapper,
    AuthorsDetails,
  },

  data() {
    return {
      dialog: false,
      search: "",
      create: false,
      fetchedAuthors: [],
      jajko: false,
      DetailsWrapper: false,

      headers: [
        {
          text: "Name",
          align: "start",
          value: "name",
        },
        // { text: "Year born", value: "yearBorn" },
        { text: "Author ID", value: "slug" },
        { text: "Delete item", value: "actions" },
      ],
    };
  },
  created() {
    this.fetchAuthors();
  },
  computed: {
    ...mapState("authorsStore", ["authors"]),
    ...mapState("booksStore", ["books"]),
  },
  methods: {
    ...mapActions("authorsStore", ["deleteAuthor"]),
    ...mapActions("booksStore", ["updateList"]),
    ...mapActions("authorsStore", ["pushFetched"]),

    closeDialog() {
      this.dialog = false;
      this.jajko = false;
    },
    ttt() {
      this.fetchAuthors();
    },
    fetchAuthors() {
      fetch("https://wolnelektury.pl/api/authors/")
        .then((response) => response.json())
        .then((data) =>
          (this.fetchedAuthors = data)(this.pushFetched(this.fetchedAuthors))
        );
    },
    edit() {
      this.create = false;
    },

    createItem() {
      this.create = true;
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

    filter(value, search, item) {
      let filtered = RegExp(search, "i").test(item.name);
      return filtered;
    },
    editItem(item) {
      this.editedIndex = this.authors.indexOf(item);
      this.editedItem = Object.assign({}, item);
      console.log(item);
      this.jajko = true;
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
