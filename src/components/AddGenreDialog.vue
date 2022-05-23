<template>
  <div>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Genre name"
              required
              v-model="genre.name"
              :rules="inputRules"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
      <v-btn
        color="blue darken-1"
        :disabled="isDisabled"
        text
        @click="addNewGenre"
      >
        Save
      </v-btn>
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
      inputRules: [(v) => !!v || "This field is required"],
    };
  },
  computed: {
    genres() {
      return this.$store.state.genresStore.genres;
    },
    isDisabled() {
      if (!this.genre.name) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    ...mapActions("genresStore", ["addGenre"]),

    addNewGenre() {
      this.genre.id = getIds(this.genres) + 1;

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
