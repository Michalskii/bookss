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

          <!-- <v-col cols="12" md="4" sm="6">
            <v-text-field v-model="author.id" label="ID" required />
          </v-col> -->
        </v-row>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDialog;"> Close </v-btn>
      <v-btn color="blue darken-1" text @click="addNewAuthor"> Save</v-btn>
      <v-btn @click="getIds">das</v-btn>
    </v-card-actions>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      author: {
        id: "",
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
    ...mapActions(["addAuthor"]),

    addNewAuthor() {
      this.author.id = this.authors.length;
      let author = this.author;
      this.addAuthor(author);
      this.closeDialog();
    },
    closeDialog() {
      this.$emit("close");
    },

    jajko(author) {
      this.$store.state.authorsStore.authors.splice(
        this.authors.indexOf(author),
        1
      );
    },

    getIds() {
      const ids = this.$store.state.authorsStore.authors.map((author) => {
        return author.id;
      });

      this.getLastId(ids);
    },

    getLastId(ii) {
      const max = Math.max.apply(null, ii);
      console.log(max);
    },
  },
};
</script>

<style></style>
