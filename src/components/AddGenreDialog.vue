<template>
  <div>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Genre name" required v-model="genre.name" />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
      <v-btn color="blue darken-1" text @click="addNewGenre"> Save </v-btn>
    </v-card-actions>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { getIds } from "../components/getIds";

export default {
  data() {
    return {
      dialog: false,
      genre: {
        id: "",
        name: "",
      },
    };
  },
  computed: {
    genres() {
      return this.$store.state.genresStore.genres;
    },

    getIds() {
      const ids = this.genres.map((genre) => {
        return genre.id;
      });

      const lastId = Math.max(0, ...ids);
      console.log(lastId);
      return lastId;
    },
  },

  methods: {
    ...mapActions("genresStore", ["addGenre"]),

    addNewGenre() {
      this.genre.id = this.getIds + 1;

      let genre = this.genre;
      this.addGenre(genre);

      this.clearInput();
      this.closeDialog();
    },

    clearInput() {
      this.genre = "";
    },
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
