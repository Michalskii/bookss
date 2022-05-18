<template>
  <div>
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.title"
                label="Title"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.released"
                label="Released"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                v-model="editedItem.author"
                :items="authors"
                label="Author"
                item-text="fullName"
                item-value="id"
                color="blue"
              >
              </v-autocomplete>

              <!-- <v-text-field
                v-model="editedItem.author"
                item-text="fullName"
                label="Author Id"
              ></v-text-field> -->
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                v-model="editedItem.genreId"
                :items="genres"
                label="genre"
                item-text="name"
                item-value="id"
                color="blue"
              >
              </v-autocomplete>
              <!-- <v-text-field
                v-model="editedItem.genreId"
                label="Genre Id"
              ></v-text-field> -->
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog()">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="saveEditedItem()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  props: ["editedItem", "editedIndex"],
  computed: {
    books() {
      return this.$store.state.booksStore.books;
    },

    authors() {
      return this.$store.state.authorsStore.authors;
    },

    genres() {
      return this.$store.state.genresStore.genres;
    },
  },

  data() {
    return {
      book: {},
    };
  },
  methods: {
    ...mapActions("booksStore", ["updateList"]),
    ...mapActions("booksStore", ["tescik"]),

    closeDialog() {
      this.$emit("close");
    },

    saveEditedItem() {
      console.log(this.editedIndex);
      console.log(this.editedItem);
      //   Object.assign(this.books[this.editedIndex], this.editedItem);
      //   this.updateList(this.books);
      let payload = {
        a: this.editedIndex,
        b: this.editedItem,
      };
      this.tescik(payload);
      this.closeDialog();
    },
  },
};
</script>

<style>
</style>