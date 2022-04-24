<template>
  <div>
    <dialog-wrapper
      v-if="dialog === true"
      :active="dialog"
      @close="closeDialog"
      title="Add new author"
    >
      <add-author-dialog
        @close="closeDialog"
        @pushAuthor="updateAuthor($event)"
      />
    </dialog-wrapper>

    <v-btn color="primary" dark @click="openDialog"> Add new author </v-btn>

    <v-data-table
      :headers="headers"
      :items="authorsList"
      :items-per-page="5"
      class="elevation-2"
    />
  </div>
</template>

<script>
import DialogWrapper from "@/components/DialogWrapper";
import AddAuthorDialog from "@/components/AddAuthorDialog";

export default {
  components: {
    DialogWrapper,
    AddAuthorDialog,
  },
  name: "AuthorsTest",
  data() {
    return {
      authorsList: [],
      dialog: false,
      headers: [
        {
          text: "Name",
          align: "start",
          value: "fullName",
        },
        { text: "Year born", value: "yearBorn" },
        { text: "Author ID", value: "id" },
      ],
    };
  },

  methods: {
    dupa() {
      console.log(this.authorsList);
    },
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
    updateAuthor(author) {
      this.authorsList.push(author);
      const newAuthors = JSON.stringify(this.authorsList);
      localStorage.setItem("authorsList", newAuthors);
      this.closeDialog();
    },
  },
  mounted() {
    if (localStorage.authorsList) {
      this.authorsList = JSON.parse(localStorage.authorsList);
    }
  },
};
</script>