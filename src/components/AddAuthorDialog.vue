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
      <v-btn color="blue darken-1" text @click="closeDialog"> Close </v-btn>
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
        id: "",
        yearBorn: "",
        fullName: "",
      },
    };
  },
  methods: {
    ...mapActions(["addAuthor"]),

    addNewAuthor() {
      let author = {
        yearBorn: this.author.yearBorn,
        fullName: this.author.fullName,
      };

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
