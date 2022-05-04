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
    <v-data-table
      :headers="headers"
      :items="genres"
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
import AddGenreDialog from "../components/AddGenreDialog.vue";
import DialogWrapper from "../components/DialogWrapper.vue";
import { mapActions } from "vuex";

export default {
  name: "Genres",
  data() {
    return {
      dialog: false,
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

    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
    deleteItem(item) {
      this.deleteGenre(item.id);
    },
  },
  computed: {
    genres() {
      return this.$store.state.genresStore.genres;
    },
  },
};
</script>
