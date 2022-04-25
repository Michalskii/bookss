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
      :items="genresList"
      :items-per-page="5"
      class="elevation-2"
    />
  </div>
</template> 

<script>
import AddGenreDialog from "../components/AddGenreDialog.vue";
import DialogWrapper from "../components/DialogWrapper.vue";

export default {
  name: "Genres",
  data() {
    return {
      genresList: [],
      dialog: false,
      headers: [
        {
          text: "Genre",
          align: "start",
          value: "name",
        },

        { text: "Genre ID", value: "id" },
      ],
    };
  },

  components: {
    AddGenreDialog,
    DialogWrapper,
  },
  methods: {
    updateGenre(newGenre) {
      this.genresList.push(newGenre);
      const newGenres = JSON.stringify(this.genresList);
      localStorage.setItem("genresList", newGenres);
      this.closeDialog();
    },

    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
  },
};
</script>
