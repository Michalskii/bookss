<template>
<<<<<<< Updated upstream
  <h1>Authors</h1>
=======
  <div>
    <dialog-wrapper  :title="'Authors'">
       <add-author-dialog @newAuthor="updateAuthor($event)"/>    
    </dialog-wrapper>
    <v-data-table
      :headers="headers"
      :items="authorsList"
      :items-per-page="5"
      class="elevation-2"
    />
  </div>
>>>>>>> Stashed changes
</template>

<script>
<<<<<<< Updated upstream
 export default {
    name: 'Authors',
=======
import DialogWrapper from "../components/DialogWrapper.vue";
import AddAuthorDialog from "../components/AddAuthorDialog.vue"
export default {
  name: "Authors",
  components: {
    DialogWrapper,
    AddAuthorDialog
  },
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
  methods: {
    updateAuthor(newAuthor) {
      this.authorsList.push(newAuthor);
>>>>>>> Stashed changes

    components: {
      
    },
  }
</script>