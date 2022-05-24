<template>
  <div>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              v-model="author.fullName"
              label="Full name"
              required
              :rules="inputRules"
            />
          </v-col>
          <v-col cols="12" md="4" sm="6">
            <v-text-field
              v-model="author.yearBorn"
              label="Year born"
              @keypress="validateNum"
              required
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
        text
        @click="addNewAuthor"
        :disabled="isDisabled"
      >
        Save</v-btn
      >
    </v-card-actions>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { getIds } from "../components/getIds";
import { NumbersOnly } from "../components/NumbersOnly";
import { mapState } from "vuex";

export default {
  data() {
    return {
      author: {
        yearBorn: "",
        fullName: "",
      },
      inputRules: [(v) => !!v || "This field is required"],
    };
  },

  computed: {
    ...mapState("authorsStore", ["authors"]),

    isDisabled() {
      if (!this.author.fullName) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions("authorsStore", ["addAuthor"]),

    addNewAuthor() {
      this.author.id = getIds(this.authors) + 1;
      let author = this.author;
      this.addAuthor(author);
      this.closeDialog();
    },

    validateNum() {
      return NumbersOnly();
    },

    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
