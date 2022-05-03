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

    <v-data-table
      :headers="headers"
      :items="authors"
      :items-per-page="5"
      class="elevation-2"
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
    ...mapActions(["deleteAuthor"]),
    ...mapActions(["updateList"]),
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },

    deleteItem(item) {
      // console.log(item.id);

      const dupa = this.$store.state.booksStore.books;

      // const filtered = dupa.filter((book) => book.author == item.id);

      // console.log(dupa);

      // console.log(filtered);

      const newArr = dupa.map((obj) => {
        if (obj.author === item.id) {
          return { ...obj, author: null };
        }

        return obj;
      });

      console.log(newArr);
      this.updateList(newArr);

      this.deleteAuthor(item.id);
    },
  },
};
</script>