<template>
  <div>
  <AddAuthorDialog />
 
 
  <v-data-table
      :headers="headers"
      :items="authorsList"
      :search="search"
      :items-per-page="5"
      class="elevation-2"
     /></div>
</template>

<script>
import AddAuthorDialog from '../components/AddAuthorDialog.vue'
 export default {
    name: 'Authors',
    data() {
      return {
      authorsList: [],
       headers: [
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Year born', value: 'yearBorn' },
        { text: 'Author ID', value: 'authorId' },
        ]
      }},
      
    

    components: {
      AddAuthorDialog
      
    },
  }
</script>