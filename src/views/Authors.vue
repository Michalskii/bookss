<template>
  <div>
    <AddAuthorDialog @newAuthor="updateAuthor($event)" />

    <v-data-table
      :headers="headers"
      :items="authorsList"
      :items-per-page="5"
      class="elevation-2"
    />
  </div>
</template>




<script>
import AddAuthorDialog from "../components/AddAuthorDialog.vue";
export default {
  name: "Authors",
  data() {
    return {
      authorsList: [],
      headers: [
        {
          text: "Name",
          align: "start",
          value: "fullName",
        },
        { text: "Year born", value: "yearBorn" },
        { text: "Author ID", value: "id" },
      ],
    };
  },
  components: {
    AddAuthorDialog,
  },

  methods: {
    updateAuthor(newAuthor) {
      this.authorsList.push(newAuthor);

      const newAuthors = JSON.stringify(this.authorsList);
      localStorage.setItem("authorsList", newAuthors);
    },
  },
  mounted() {
    if (localStorage.authorsList) {
      this.authorsList = JSON.parse(localStorage.authorsList);
    }
  },
};
</script>
