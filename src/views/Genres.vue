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
    closeDialog() {
      this.dialog = false;
    },
    openDialog() {
      this.dialog = true;
    },
  },
  computed: {
    genres() {
      return this.$store.state.genresStore.genres;
    },
  },
};
</script>
