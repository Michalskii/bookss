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
                :rules="inputRules"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.released"
                label="Released"
                @keypress="validateNum"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-autocomplete
                v-model="editedItem.author"
                :items="authors"
                label="Author"
                :rules="inputRules"
                item-text="fullName"
                item-value="id"
                color="blue"
              >
              </v-autocomplete>
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
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="closeDialog()">
          Cancel
        </v-btn>
        <v-btn
          color="blue darken-1"
          :disabled="isDisabled"
          text
          @click="saveEditedItem()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import { NumbersOnly } from "../components/NumbersOnly";
import { getIds } from "../components/getIds";

export default {
  props: ["editedItem", "editedIndex", "create"],
  computed: {
    ...mapState("booksStore", ["books"]),
    ...mapState("genresStore", ["genres"]),
    ...mapState("authorsStore", ["authors"]),
    isDisabled() {
      if (!this.editedItem.author || !this.editedItem.title) {
        return true;
      } else {
        return false;
      }
    },
  },

  data() {
    return {
      book: {},
      inputRules: [(v) => !!v || "This field is required"],
    };
  },
  methods: {
    ...mapActions("booksStore", ["updateList"]),
    ...mapActions("booksStore", ["tescik"]),
    ...mapActions("booksStore", ["addBook"]),

    closeDialog() {
      this.$emit("close");
    },
    validateNum() {
      return NumbersOnly();
    },
    addNewBook() {
      this.editedItem.id = getIds(this.books) + 1;
      let book = this.editedItem;
      console.log(this.editedItem);
      this.addBook(book);
      this.closeDialog();
    },
    saveEditedItem() {
      if (this.create == true) {
        this.addNewBook();
      } else {
        console.log(this.editedIndex);
        console.log(this.editedItem);

        let payload = {
          a: this.editedIndex,
          b: this.editedItem,
        };
        this.tescik(payload);
        this.closeDialog();
      }
    },
  },
};
</script>

<style>
</style>