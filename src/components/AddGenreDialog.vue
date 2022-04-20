<template>

<v-dialog v-model="dialog" persistent max-width="600px">
    
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Add new genre
      </v-btn>
    </template>

    <v-card>
     
      <slot name="title"></slot>
     
      
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Genre name" required v-model="genre.name" />
            </v-col>

            <v-col cols="12" sm="6" md="4">
              <v-text-field label="ID" required v-model="genre.id" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="
            dialog = false;
            addNewGenre();
            
          "
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import AddGenreDialog from "../components/AddGenreDialog.vue";

export default {
  data() {
    return {
      dialog: false,
      genre: {
        id: "",
        name: "",
      },
      genres: [],
    };
  },
  components: {
    AddGenreDialog: AddGenreDialog,
  },
  methods: {
    addNewGenre() {
      let genre = {
        name: this.genre.name,
        id: this.genre.id,
      };
      this.$emit("newGenre", genre);
    this.clearInput()
    },

     clearInput() {
          
          this.genre = ''
       }
  },
  mounted() {
    if (localStorage.genres) {
      this.genres = JSON.parse(localStorage.genres);
    }
  },
};
</script>

<style></style>
