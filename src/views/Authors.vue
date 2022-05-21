<template>
  <div>
    <dialog-wrapper
      v-if="dialog === true"
      :active="dialog"
      @close="closeDialog"
      title="Add new author"
    >
      <add-author-dialog @close="closeDialog" />
    </dialog-wrapper>

    <v-btn color="primary" dark @click="openDialog"> Add new author </v-btn>

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
      :items-per-page="5"
      class="elevation-2"
      :custom-filter="filter"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import DialogWrapper from "@/components/DialogWrapper";
import AddAuthorDialog from "@/components/AddAuthorDialog";
import { mapActions } from "vuex";
export default {
  components: {
    DialogWrapper,
    AddAuthorDialog,
  },

  data() {
    return {
      dialog: false,
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          value: "fullName",
        },
        { text: "Year born", value: "yearBorn" },
        { text: "Author ID", value: "id" },
        { text: "Delete item", value: "actions" },
      ],
    };
  },
  computed: {
    authors() {
      return this.$store.state.authorsStore.authors;
    },
  },
  methods: {
    ...mapActions("authorsStore", ["deleteAuthor"]),
    ...mapActions("booksStore", ["updateList"]),
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },

    filter(value, search, item) {
      let filtered = RegExp(search, "i").test(item.fullName);
      return filtered;
    },

    deleteItem(item) {
      const books = this.$store.state.booksStore.books;

      const newBooks = books.map((obj) => {
        if (obj.author === item.id) {
          return { ...obj, author: null };
        }

        return obj;
      });

      this.updateList(newBooks);

      this.deleteAuthor(item.id);
    },
  },
};
</script>