<template>
  <div>
    <AddGenreDialog @newGenre="updateGenre($event)" >




 <v-card-title slot="title">
        <span class="text-h5">Add new genre</span>
      </v-card-title>
    </AddGenreDialog>

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

export default {
  name: "Genres",
  data() {
    return {
      genresList: [],
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
  },
  methods: {
    updateGenre(newGenre) {
      this.genresList.push(newGenre);
      const newGenres = JSON.stringify(this.genresList);
      localStorage.setItem("genresList", newGenres);
    },

    
  },
};
</script>
