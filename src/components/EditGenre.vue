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
import { getIds } from "../components/getIds";

export default {
  props: {
    editedItem: {
      type: Object,
      required: true,
    },
    editedIndex: {
      type: Number,
      required: true,
    },
    create: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    ...mapState("booksStore", ["books"]),
    ...mapState("genresStore", ["genres"]),
    ...mapState("authorsStore", ["authors"]),
    isDisabled() {
      return !this.editedItem.name;
    },
  },

  data() {
    return {
      book: {},
    };
  },
  methods: {
    ...mapActions("genresStore", ["editGenre"]),
    ...mapActions("genresStore", ["addGenre"]),

    closeDialog() {
      this.$emit("close");
    },
    addNewGenre() {
      this.editedItem.id = getIds(this.genres) + 1;
      let genre = this.editedItem;
      this.addGenre(genre);
      this.closeDialog();
    },

    saveEditedItem() {
      if (this.create == true) {
        this.addNewGenre();
      } else {
        let payload = {
          a: this.editedIndex,
          b: this.editedItem,
        };
        this.editGenre(payload);
        this.closeDialog();
      }
    },
  },
};
</script>

<style>
</style>