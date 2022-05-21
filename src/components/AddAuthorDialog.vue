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
      <v-btn color="blue darken-1" text @click="closeDialog;"> Close </v-btn>
      <v-btn color="blue darken-1" text @click="addNewAuthor"> Save</v-btn>
    </v-card-actions>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { getIds } from "../components/getIds";
import { NumbersOnly } from "../components/NumbersOnly";
export default {
  data() {
    return {
      author: {
        yearBorn: "",
        fullName: "",
      },
    };
  },

  computed: {
    authors() {
      return this.$store.state.authorsStore.authors;
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
    // NumbersOnly(evt) {
    //   evt = evt ? evt : window.event;
    //   var charCode = evt.which ? evt.which : evt.keyCode;
    //   if (
    //     charCode > 31 &&
    //     (charCode < 48 || charCode > 57) &&
    //     charCode !== 46
    //   ) {
    //     evt.preventDefault();
    //   } else {
    //     return true;
    //   }
    // },
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
