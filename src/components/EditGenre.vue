<template>
  <div>
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="editedItem.name"
                label="Genre"
              ></v-text-field>
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
import { mapState } from "vuex";

export default {
  props: ["editedItem", "editedIndex"],
  computed: {
    ...mapState("booksStore", ["books"]),
    ...mapState("genresStore", ["genres"]),
    ...mapState("authorsStore", ["authors"]),
  },

  data() {
    return {
      book: {},
    };
  },
  methods: {
    ...mapActions("genresStore", ["tescik"]),

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