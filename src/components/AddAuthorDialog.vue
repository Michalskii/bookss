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

    getIds() {
      const ids = this.$store.state.authorsStore.authors.map((author) => {
        return author.id;
      });

      const lastId = Math.max(0, ...ids);
      console.log(lastId);
      return lastId;
    },
  },
  methods: {
    ...mapActions("authorsStore", ["addAuthor"]),

    addNewAuthor() {
      this.author.id = this.getIds + 1;
      let author = this.author;
      this.addAuthor(author);
      this.closeDialog();
    },
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style></style>
